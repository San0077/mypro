import React, { useState } from 'react';
import { dum } from './App';
import Box from '@mui/material/Box';
import bird from './images/birds-7376432_1920.jpg'
import face from './images/face-7401257_1920.jpg'
import lion from './images/lion-7383228_1920.jpg'
import soccer from './images/soccer-7392844_1920.jpg'
import sunset from './images/sunset-7397336_1920.jpg'
import village from './images/village-7405160_1920.jpg'
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GooglePayButton from '@google-pay/button-react';
const itemData = [
  {
    img: bird,
    title: 'Fern',
  },
  {
    img: face,
    title: 'Snacks',
  },
  {
    img: lion,
    title: 'Mushrooms',
  },
  {
    img: soccer,
    title: 'Tower',
  },
  {
    img: sunset,
    title: 'Sea star',
  },
  {
    img: village,
    title: 'Honey',
  },
 
];

function Payment(){
  var [seats, setseats] = useState(dum);
  return(
    <Card sx={{ maxWidth: 300,height:300}}>
         <h4 className="seatschat">Seats booking</h4>
         <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary" className="seatschat">
           <b>Seats are  {`${seats}`}</b>
        </Typography>
        <br/>
    <CardActions> <br/>
    <div>
    <Button size="small">More details</Button>
    <br/>
    <GooglePayButton className="pics"
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
</div>
    </CardActions>
      
   
  </Card>
  )
}

export function BookedYourSeats() {
  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

  
  return (
    <div className="bookedseats">
      <div>
    <Box sx={{ width: 1000, Height: 100 }} className="pics">
    <Masonry columns={3} spacing={2}>
      {itemData.map((item) => (
        <div >
          <img
            src={`${item.img}?w=162&auto=format`}
            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: "flex",
              width: '100%',
              backgroundColor:"#1A1A1A",
              padding:"10px",
              
            }}
          />
          
        </div>
      ))}
    </Masonry>
  </Box>
    </div>
    <div >
         <div className="seatss">
              <h3>Payments</h3>
              <Payment/>
         </div>
           
        
    </div>
  </div>
  );
}
