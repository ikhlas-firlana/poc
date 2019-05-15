package main

import (
	"github.com/ikhlas-firlana/poc/go-test/api"
	"fmt"
)

func main() {
	apiStruct := api.API{}
	stuff, err := apiStruct.DoStuff()
	if err != nil {
		fmt.Println(fmt.Errorf("error %v", err))
		return
	}
	fmt.Printf("Stuf %v", string(stuff))
}