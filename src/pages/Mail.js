import React from 'react';
import styled from 'styled-components';
import { FaReply } from 'react-icons/fa'
import { MdOutlineArrowLeft } from 'react-icons/md'

const Container = styled.div`
height: 100vh;
margin: 50px;
`

const ButtonBack = styled.button`
background: white;
color : grey;
padding: 5px 10px 5px 5px;
border-radius: 10px;
border : solid 2px grey;
margin-top: 20px;
`

const Subject = styled.h2`
padding: 30px;
`

const BlueHeader = styled.div`
background: #0375BB;
color: white;
margin-top: 30px;
height: 200px;
padding-left: 20px;
`

const Sender = styled.h2`
padding: 20px 10px 10px 70px;
margin: 30px 30px
`

const ButtonReply = styled.button`
background: white;
color : grey;
padding: 10px;
border-radius: 10px;
border : solid 2px grey;

`

const EmailContent = styled.p`
text-align : left;
padding: 50px;
margin: 30px;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: end;
padding: 80px;
`



const Mail = () => {
    return (
        <Container>
            <BlueHeader>
                <ButtonBack><MdOutlineArrowLeft />Retour</ButtonBack>
                <Subject>Email Subject</Subject>
            </BlueHeader>
            <div>
                <Sender>Sender / Date</Sender>
                <EmailContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisl non nisi consectetur porta. Sed ac dolor ac sapien imperdiet interdum. Aliquam quis ligula viverra, volutpat augue vel, commodo mauris. Donec eu tellus tellus. Etiam sit amet tincidunt mi. Nulla vel aliquet ante. In porta dolor eu semper facilisis. Quisque ut dolor congue, mollis mauris sed, semper velit. Donec eget velit leo. Fusce accumsan ultrices placerat. Proin aliquet purus non ante molestie, ac pulvinar nunc lobortis. Integer ac dui eleifend, lacinia risus sed, varius purus. Sed consequat a diam vitae commodo.Nunc ullamcorper mollis neque non interdum. Nam elementum elementum tortor eget tincidunt. Integer metus nisi, dignissim a euismod at, dapibus at elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed varius molestie risus, sit amet finibus felis egestas non. Nullam laoreet, arcu ut consequat viverra, nunc odio euismod felis, sit amet tincidunt mi enim efficitur quam. Vivamus commodo consequat ante at dictum. Vestibulum feugiat dui velit. Aliquam erat volutpat. Donec ut lacus dolor. Cras in erat commodo, dapibus mi sit amet, tristique erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae suscipit nunc. Proin varius felis velit, sit amet euismod lorem dictum ac. Proin suscipit sapien in lectus fermentum, vel mattis ante ornare.</EmailContent>
                <ButtonDiv>
                    <ButtonReply> <FaReply /> Réspondre</ButtonReply>
                </ButtonDiv>
            </div>

        </Container>
    );
};

export default Mail;