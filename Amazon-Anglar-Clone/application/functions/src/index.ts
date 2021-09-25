import * as functions from "firebase-functions";
import * as express from "express";
const stripe = require("stripe")(
	"sk_test_51Jbr0qSC2Ju0ZIVOtQeYYBQFI9mobGxezvsP2Bv6GIUhP08bykJBDqMP4zpWW60gVsaL4P2futVIydM1M6omcUM9007pyHobiH"
);

// Api

// App config
const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(express.json());
// Api route
app.get("/", (request, response) => response.status(200).send("welcome"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("payment request received: ", total);
	try {
		await stripe.customers.create({
			name: "Mohan",
			address: {
				line1: "Srinivasa Nagar",
				postal_code: "516002",
				city: "Kadapa",
				state: "Andhra Pradhesh",
				country: "India",
			},
		});

		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: "INR",
			description: "Angular Amazon Clone services",
		});

		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error);
	}
});

// Lsitnen command
exports.api = functions.https.onRequest(app);
