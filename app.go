package main

import (
	"changeme/shared"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) FriendSpam(username, password, uid, avatarid string) string {

	credentialsEncoded := base64.URLEncoding.EncodeToString([]byte(username + ":" + password))
	baseUrl := "https://eternitybots.ml/v1/" // Our baseUrl
	client := &http.Client{}                 // Our http client
	// Login to get a token
	res, err := client.Get(baseUrl + "login/credentials=" + credentialsEncoded)
	if err != nil {
		log.Println("Err:", err)
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Println(err)
	}

	log.Println(string(body))

	if !strings.Contains(string(body), "Login successful") {
		return fmt.Sprintf("Invalid Credentials!")
	}

	// Store the login response into a LoginResponse Struct
	var loginResponse LoginResponse
	_ = json.Unmarshal(body, &loginResponse) // Ignore error for simplicity

	shared.Token = loginResponse.Token

	res, err = client.Get(baseUrl + "friendSpam/username=DEV/token=" + shared.Token + "/uid=" + uid + "/avatarid=" + avatarid)
	if err != nil {
		log.Println("Err:", err)
	}

	body, err = ioutil.ReadAll(res.Body)
	if err != nil {
		log.Println(err)
	}

	log.Println(string(body))

	var spamResponse FriendSpamResponse
	_ = json.Unmarshal(body, &spamResponse) // Ignore error for simplicity

	return fmt.Sprintf("%s", spamResponse.Message)

}
