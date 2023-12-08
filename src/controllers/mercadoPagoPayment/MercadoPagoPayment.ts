import { Request, Response } from "express";
import mercadopago from "mercadopago"

mercadopago.configure({
    access_token: `${process.env.TOKEN_MERCADO_PAGO}`,
});

export default function MercadoPagoPayment(req: Request, res: Response) {
    const prod = req.body;

    //console.log(prod)

    let preference: any = {
        items: [
            {
                id: prod.id,
                title: prod.title,
                currency_id: "BRL",
                picture_url: prod.image,
                description: prod.description,
                category_id: "art",
                quantity: 1,
                unit_price: prod.price,
            },
        ],
        /*success: "https://topshoping.netlify.app/",
            failure: "https://topshoping.netlify.app/",
            pending: "https://topshoping.netlify.app/",*/
        back_urls: {
            success: "http:localhost:3000",
            failure: "http://localhost:3000",
            pending: "http:localhost:3000",
        },
        auto_return: "approved",
        binary_node: true,
    };
    
   //console.log(preference)

    mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.messaga }));

}

