import * as functions from "firebase-functions";
import * as express from "express";
const stripe = require("stripe")(
	"sk_test_51Jbr0qSC2Ju0ZIVOtQeYYBQFI9mobGxezvsP2Bv6GIUhP08bykJBDqMP4zpWW60gVsaL4P2futVIydM1M6omcUM9007pyHobiH"
);

const products = [
	{
		id: "1",
		title: "The Lean Startup - Reading is as easy as Bed time Story",
		price: "11.96",
		rating: "3.8",
		image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",

	},
	{
		id: "2",
		title: "Behance Luxury Purse - Name Defines It",
		price: "199.90",
		rating: "4.2",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96cfcf34068050.56c3194bc53bf.jpg",

	},
	{
		id: "3",
		title: "Ozuko Bag - Weight is No Weight",
		price: "69.50",
		rating: "4",
		image: "https://ae01.alicdn.com/kf/HTB17jqmgoMgYeJjSZFGq6xsMXXaP/OZUKO-New-Men-Fashion-School-Bags-Backpack-Laptop-Bag-Student-Men-Backpack-for-Teenager-Boys-Girls.jpg",

	},
	{
		id: "4",
		title: "OneMinus - Never Look Away",
		price: "799.99",
		rating: "4.4",
		image: "https://bestchineseproducts.com/wp-content/uploads/2020/09/One-Plus-8--758x1024.png",

	},
	{
		id: "5",
		title: "Flexform Sofa - Rest Like a baby",
		price: "449.26",
		rating: "3.9",
		image: "https://dreamdesign.co.uk/wp-content/uploads/Flexform-Groundpiece-Sofa-Dream-Design-07.jpg",

	},
	{
		id: "6",
		title: "Stryder - Lead the way",
		price: "199.46",
		rating: "3",
		image: "https://stryderbikes.com/wp-content/uploads/2020/05/Tacon-26T-Black-Org-26x2.35.jpg",

	},
	{
		id: "7",
		title: "Beats - Don't Care",
		price: "224.67",
		rating: "4.9",
		image: "https://i5.walmartimages.com/asr/85f28830-1d6c-4cd1-8e09-1477520735e4.ba3ed58f07bf05fc2ecc481899579600.jpeg",

	},
	{
		id: "8",
		title: "Black Jeans - Help while others fall for you",
		price: "29.36",
		rating: "3.8",
		image: "https://i5.walmartimages.com/asr/e8495b5c-14fd-4eee-9721-ba994afda184_1.557125fde23840a5c9f83062f280635e.jpeg",

	},
	{
		id: "9",
		title: "Good Knight - Sleep Well while knigh protects you",
		price: "7.99",
		rating: "4",
		image: "https://www.e360.in/image/cache/catalog/products/pesticides/good-night-power-active-plus-1500x1500.jpg",

	},
	{
		id: "10",
		title: "UNO - Never be bored",
		price: "3.99",
		rating: "2.9",
		image: "https://live.icswaco.com/prodimg/hires/MU50_1.jpg",

	},
	{
		id: "11",
		title: "Shoes - Feel like flying?",
		price: "149.99",
		rating: "5",
		image: "https://th.bing.com/th/id/R.e39c5b2bfa61b4b53e8453feb4d62d97?rik=1sjEaJxxR%2bXVlg&riu=http%3a%2f%2fwww.cstylejeans.com%2fwp-content%2fuploads%2f2016%2f02%2fmens-fashion-shoes-cheap.jpg&ehk=y7vNX%2bmlx0oeYlVpuE%2fzTyT5HpwOhQHq7dl38YVLVmg%3d&risl=&pid=ImgRaw&r=0",

	},
	{
		id: "12",
		title: "Truck - Better get License!",
		price: "25.99",
		rating: "2.2",
		image: "https://i5.walmartimages.com/asr/81996559-e08e-4e92-8700-54ebe323f941_1.39fe17a565375d7bf5814e3317050555.jpeg",

	},
	{
		id: "13",
		title: "Belt - Completes the Look",
		price: "12.99",
		rating: "3.6",
		image: "https://mammothworkwear.com/brown-carhartt-leather-logo-belt-w1280h1024q90i6358.jpg",

	},
	{
		id: "14",
		title: "Sandles - Decide your path",
		price: "78.94",
		rating: "1",
		image: "https://i5.walmartimages.com/asr/6950a303-963d-412f-acf1-5d9f8227ed37.3c8160168e420b10a10b0cdf7a1fee28.jpeg",

	},
	{
		id: "15",
		title: "VR Headset- Immerse in It",
		price: "122.56",
		rating: "3.3",
		image: "https://www.pdair.com/image/cache/catalog/cases/vrbox2b_2-1000x1000.jpg",

	},
	{
		id: "15",
		title: "Cow Boy Hat - Don't you need cow now?",
		price: "17.89",
		rating: "1.7",
		image: "https://pngimg.com/uploads/cowboy_hat/cowboy_hat_PNG45.png",

	},
	{
		id: "16",
		title: "CC Camera - Don't install it EveryWhere!",
		price: "175.98",
		rating: "4",
		image: "https://www.visiontech-bd.com/data/product/Hikvison/DS-2CE56H0T-ITPF(5MP).jpg",

	},
	{
		id: "17",
		title: "Hydrein - Always Be Hydrated",
		price: "9.26",
		rating: "3.2",
		image: "https://th.bing.com/th/id/R.1ce0250f99e8b7259cd8872c6106bef3?rik=6avcJcnativUyA&riu=http%3a%2f%2fb4bestreviews.com%2fwp-content%2fuploads%2f2018%2f12%2fPyrus-Smart-Water-Bottle.jpg&ehk=8h2u8u9XYwhSH%2f6rZLhDbqZVc8a5nbsk3z1KkyvuVvA%3d&risl=&pid=ImgRaw&r=0",
	},
	{
		id: "18",
		title: "MakeUp Kit - We know you look beautiful",
		price: "499.59",
		rating: "4.3",
		image: "https://fenteg-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/SHANY-Carry-All-Trunk-Professional-Makeup-Kit-1.jpg",

	},
	{
		id: "19",
		title: "Hardisk - Travel With Memories!",
		price: "99.92",
		rating: "4.6",
		image: "https://i5.walmartimages.com/asr/31a73fdb-b60e-4b4b-a3a8-1fd0ec9c9235.12c38fe9fd16bdc0f07bb2e07b05257a.jpeg",

	},
	{
		id: "20",
		title: "Travel Suitcase - Ofcourse you can fit in one of those",
		price: "549.92",
		rating: "4.1",
		image: "https://i5.walmartimages.com/asr/f9183a8c-642e-4895-821b-5f04c46b03d0_1.9b702252170adfab470d4049c68989dd.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",

	},
]

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

app.get("/products", (request, response)=> response.status(200).send(products));

// Lsitnen command
exports.api = functions.https.onRequest(app);
