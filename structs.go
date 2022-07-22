package main

type LoginResponse struct {
	Message string `json:"message"`
	Token   string `json:"token"`
}
type FriendSpamResponse struct {
	Message string `json:"message"`
}
