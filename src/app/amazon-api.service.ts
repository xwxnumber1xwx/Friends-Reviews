import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AmazonApiService {

  constructor() { }

  //not working

 /*  getReview(product: string, user: string): Promise<Response> {
    let currentTime: any = new Date();
    let dateStamp: string = currentTime.toISOString();
    let formattedDate = `${currentTime.getFullYear()}${(currentTime.getMonth() + 1)}${currentTime.getDate()}`;
    const KEY: string = 'AKIAIMAINZSYKX75SQLQ';
    const regionName: string = 'eu-central-1';
    let query: string = 'harry_potter';
    const serviceName: string = 'AWSECommerceService';
    const AssociateTag: string = 'daniele07-21';

    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
    //https://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html

    function getSignatureKey(crypto, key, formattedDate, regionName, serviceName) {
      var kDate = crypto.HmacSHA256(formattedDate, "AWS4" + key);
      var kRegion = crypto.HmacSHA256(regionName, kDate);
      var kService = crypto.HmacSHA256(serviceName, kRegion);
      var kSigning = crypto.HmacSHA256("aws4_request", kService);
      return kSigning;
    }

    let signature = getSignatureKey(crypto, KEY, formattedDate, regionName, serviceName);

    console.log('signature');
    console.log(signature);
    console.log(signature.toString());

   return fetch(`http://webservices.amazon.de/onca/xml?Service=${serviceName}&Operation=ItemSearch&ResponseGroup=Small&SearchIndex=All&Keywords=${query}&AWSAccessKeyId=${KEY}&AssociateTag=${AssociateTag}&Timestamp=${dateStamp}&Signature=${signature}`)
  } */
}
