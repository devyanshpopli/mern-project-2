import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=>({
    banner:{
      backgroundImage:"url(./banner2.jpg)",
    },
    bannerContent:{
      height:400,
      display:"flex",
      flexDirection:"column",
      paddingTop:25,
      justifyContent:"space-around"
    },
    tagLine:{
      display:"flex",
      height:"40%",
      flexDirection:"column",
      justifyContent:"center",
      textAlign:"center",
    },
}))

const Banner = (props) => {
    const classes = useStyles(props);
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagLine}>
          <Typography
            variant='h2'
            style={{
              fontWeight:"bold",
              marginBottom:15,
              fontFamily:"Montserrat",
            }}
          >Crypto Finder
          </Typography>
          <Typography
            variant='subtitle2'
            style={{
              color:"darkgrey",
              textTransform:"capitalize",
              fontFamily:"Montserrat"
            }}
          >Get All The Info regarding your favorite Crypto Currency
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default Banner
