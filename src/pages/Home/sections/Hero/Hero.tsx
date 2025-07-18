import { Container, styled, Grid, Typography, Button } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import ContactsIcon from '@mui/icons-material/Contacts';


const Hero = () => {

    const StyledHero = styled("div")(()=>({
        backgroundColor: "black",
        padding: "2rem 0",
        height: "100vh",
        
    }))

    const StyledImg = styled("img")(()=>({
        width: "500%",
        borderRadius: "50%",
        maxWidth: "300px",
    }))

    return (
        <>
            <StyledHero>
                <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color= "primary" variant="h1" textAlign="center">Júllya Conceição</Typography>
                        <Typography color= "primary" variant="h2" textAlign="center">Front-End Developer</Typography>
                        <Grid container>
                            <Grid item></Grid></>
                        </Grid>
                        <Button>
                            <ContactsIcon/>
                            Contact me
                        </Button>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>

        </>
    ) 
}

export default Hero
