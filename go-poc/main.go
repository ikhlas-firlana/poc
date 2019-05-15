package main

import (
	"github.com/ikhlas-firlana/poc/go-poc/api"
	"fmt"
)

func main() {
	apiStruct := api.API{
		baseURL: "http://www.mocky.io/v2/5cdbe5e42d00008f14f5a3d4"
	}
	stuff, err := apiStruct.DoStuff()
	if err != nil {
		fmt.Println(fmt.Errorf("error %v", err))
		return
	}
	fmt.Printf("Stuf %v", string(stuff))
}