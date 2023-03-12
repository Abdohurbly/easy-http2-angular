# Easy-Http2-Angular (Angular) 

### Authers: Abdulwahab Herbli - Tasnim Kasab


## Installation: 

    npm i easy-http2-angular@latest
## Basic Usage:
#### Import EasyHttpService in your Service as following: 

    import { EasyHttpService } from  'easy-http2-angular';

#### Here is an example for basic usage: 

    async getProducts() {

	return = await this.httpHelper.get(baseUrl, headers,params);
	}

## Advance Usage:
#### Import EasyHttpService in your Service as following: 

    import { EasyHttpService } from  'easy-http2-angular';
#### All the http request functions are genaric type < T > example usage: 

    async  getProducts():  Promise<IProducts[] |  String> {
		const  product:  HttpResponseType<IProducts[]> =
		await  this.httpHelper.get<Promise<IProducts[]> | String>(baseUrl,headers, params);
		if (product.status) {
			return  product.data;
		  }
		return  product.msg
	}

#### In this case, `HttpResponseType` is: 

    export  interface  HttpResponseType<T> {
		status?:  Boolean;
		data?:  T;
		msg?:  String
	}
