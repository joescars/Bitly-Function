# Bit.ly Azure Function (nodeJS) #

This repo contains a simple Azure Function for calling Bit.ly to shorten your url's. 

## Instructions ##

1. Create an account at [bitly.com](http://www.bitly.com) and generate a *Generic Access Token*. 
2. Deply your function to Azure and create an application setting called **bitly_token**. 
3. Post json data to your function in the following format

```json
{
	"longUrl":"http://azure.microsoft.com"
}
```

The Azure Function will return the raw response from bit.ly. 

```json
{
    "status_code": 200,
    "status_txt": "OK",
    "data": {
        "url": "http://bit.ly/2ttUd9T",
        "hash": "2ttUd9T",
        "global_hash": "1k5fakt",
        "long_url": "http://azure.microsoft.com/",
        "new_hash": 1
    }
}
```

## Resources ##

- [Microsoft Azure](https://azure.microsoft.com)
- [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [Bitly Developer Documentation](https://dev.bitly.com/)
- Questions [@joescars](https://www.twitter.com/joescars)