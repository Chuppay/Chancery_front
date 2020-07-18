import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkTwoToneIcon from '@material-ui/icons/BookmarkTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    tags: {
        color: 'white',
        backgroundColor: '#21CE99',
        borderRadius: '5px',
        fontSize: '18px',
        float: 'left',
        textTransform: 'uppercase',
        padding: '5px 10px 5px 10px',
        marginRight: '10px',

    },
    page: {
        fontWeight: 'bold',
        color: '#818181',
        fontSize: '43px',
        display: 'inline-block',
    },
    save: {
        float: 'right',
        margin: '-5px -25px 0 -15px',
        '&:hover': {
            borderWidth: '3px',
            borderColor: '#21CE99',
            color: '#21CE99',
            background: 'none',
        },
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: '40px',
        display: 'inline-block',
        textTransform: 'uppercase',
    },
    questionContent: {
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'inline-block',
        marginTop: '5px',
    },
    answerContent: {
        fontSize: '20px',
        marginTop: '2.5px',
        visibility: 'hidden',
        opacity: '0',
        transition: 'visibility 0s, opacity 0.5s linear',
        display: 'inline-block',
        lineHeight: '50px',
    },
    showButton: {
        color: 'white',
        borderRadius: '5px',
        fontSize: '20px',
        padding: '10px 0px 10px 0px',
        textAlign: 'center',
        textTransform: 'uppercase',
        boxShadow: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',

        width: '210px',

        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#ffffff',
            color: '#21CE99',
            boxShadow: 'none',
        },
    },

    hideButton: {
        color: '#818181',
        backgroundColor: 'white',
        borderRadius: '5px',
        fontSize: '20px',
        padding: '10px 0px 10px 0px',
        textTransform: 'uppercase',
        boxShadow: 'none',
        position: 'absolute',

        bottom: '20px',
        left: 'calc(50% - 85px)',

        width: '210px',

        '&:hover': {
            borderWidth: '3px',
            backgroundColor: '#B1B1B1',
            color: 'white',
            boxShadow: 'none',
        },
    },

    leftButton: {
        position: 'absolute',
        left: 'calc(5% - 15px)',
        top: 'calc(200px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',
        
        height: '60px',
        width: '60px',


    },
    rightButton: {
        position: 'absolute',
        right: 'calc(5% - 15px)',
        top: 'calc(200px)',

        color: '#F5F5F5',
        backgroundColor: '#B1B1B1',

        height: '60px',
        width: '60px',
    },

      mirror: {
        transform: [{ scaleX: '-1' }]
        }


})

function isOverflown(element) {
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
          }


function Flashcard(props) {

    const classes = useStyles();

    const [saved, setSaved] = React.useState(0);
    const saveFlashcard = (event) => {
        if (saved) {
            setSaved(false);
            event.currentTarget.style.filter = 'none'; 
        }
        else {
            setSaved(true);
            event.currentTarget.style.filter = 'invert(62%) sepia(94%) saturate(364%) hue-rotate(108deg) brightness(89%) contrast(91%)';
        }
    };
    
    const [show, setShowAnswer] = React.useState(0);
    const showAnswer = (event) => {

        if (show) { 
            props.onClick();
            setShowAnswer(false);
            document.getElementById("answer-initial").style.color = '#818181';

            document.getElementById("answer-content").style.opacity = '0';
            document.getElementById("answer-content").style.visibility = 'hidden';

            document.getElementById("answer-container").style.height = '200px';
            document.getElementById("answer-container").style.flex = 'none';

            document.getElementById("one").style.height = '100%';

        }
        else { 
            if (isOverflown(document.getElementById("answer-content"))) {
            props.onClose();
            
            document.getElementById("one").style.height = '690px';
            document.getElementById("answer-container").style.flex = '1';

            if (isOverflown(document.getElementById("answer-content"))) {
                document.getElementById("one").style.height = '100%';
            }
        }
            setShowAnswer(true);
            document.getElementById("answer-initial").style.color = '#21CE99';

            document.getElementById("answer-content").style.opacity = '1';
            document.getElementById("answer-content").style.visibility = 'visible';





        }
    }


    return (
        <div>
            <Container id="one" className={"flashcard-background"} style={{display: 'flex', flexFlow: 'column'}}>

                <Grid container justify="center" alignItems="center" style={{height: 30}}>

                    <Grid item container xs={5}>
                        <Typography id="difficulty" className={classes.tags} variant={"h3"} >
                            <LocalOfferIcon style={{ fontSize: 18}}/>
                                
                        &nbsp;Easy
                        </Typography>

                        <Typography id="topic" className={classes.tags} variant={"h3"} >
                        <LocalOfferIcon style={{ fontSize: 18}}/>
                        &nbsp;Accounting
                        </Typography>
                    </Grid>

                    <Grid item container xs={2} justify="center">
                        <Typography id="flashcard-id" className={classes.page} variant={"h5"} >
                        1
                        </Typography>

                        <Typography className={classes.page} variant={"h5"} >
                        &nbsp;/&nbsp;
                        </Typography>

                        <Typography id="total-flashcards" className={classes.page} variant={"h5"} >
                        420
                        </Typography>
                    </Grid>

                    <Grid item container xs={5} justify="flex-end">
                        <Typography className={classes.subheading} style={{fontSize: 25, marginTop: 6}} variant={"h3"}>
                            Save&nbsp;
                        </Typography>
                        <Button className={classes.save} disableRipple onClick={saveFlashcard} >
         
                            {saved ? <BookmarkTwoToneIcon style={{fontSize: 40}}/> : <BookmarkBorderIcon style={{fontSize: 40}}/> }
                        </Button>
                    </Grid>

                </Grid>

                <br/>
                <Container className={"question-container"} style={{width: '80%', display: 'flex'}}>

                <Typography className={classes.subheading} variant={"h4"}>
                Q.&emsp;
                </Typography>

                <Typography id="question-content" className={classes.questionContent} variant={"h4"} >
                What’s the difference between LIFO and FIFO? Can you walk me through an example of how they differ?


                </Typography>
                </Container>

                <Container id="answer-container" className={"answer-container"} style={{width: '80%', display: 'flex'}}>
                    <Typography id="answer-initial" className={classes.subheading} variant={"h4"} style={{color: '#818181'}}>
                    A.&emsp;
                    </Typography>
                    <Typography id="answer-content" className={classes.answerContent} variant={"h4"} >
                    First, note that this question does not apply to you if you’re outside the US as IFRS does not permit the use of LIFO. 

                </Typography>
                   {show ? <div/> : <Button id="show-button" className={classes.showButton} color="primary" variant={"contained"} onClick={showAnswer}>Show Answer</Button>} 
                </Container>

                {show ? <Button id="show-button" className={classes.hideButton} color="primary" variant={"contained"} onClick={showAnswer}>Hide Answer</Button> : <div/>} 

                <IconButton className={classes.leftButton} >
                    <ArrowBackIcon style={{fontSize: 30}}/>
                </IconButton>

                <IconButton className={classes.rightButton} >
                    <ArrowForwardIcon style={{fontSize: 30}}/>
                </IconButton>
                
            </Container>
        </div>
    )
}

export default Flashcard;

