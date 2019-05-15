package api

import (
	"io/ioutil"
	"net/http"
)

// API test case struct
type API struct {
	Client  *http.Client
	baseURL string
}

// DoStuff handle request stuf to third party
func (api API) DoStuff() ([]byte, error) {
	resp, err := api.Client.Get(api.baseURL + "/")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	// handling error and doing stuff with body that needs to be unit tested
	return body, err
}