import React from 'react'
import styled from 'styled-components'
import picture from "../images/ThreeAmigos.jpg"

const Picture = styled.img`
width: 500px;
padding: 50px;
display: flex;
align-items: center;
justify-content: center;
`
const Paragraph = styled.p`
padding: 0px;
display: block;
margin: 40px;
text-align: justify;
`

const AboutUs = () => {
  return (
    <div>
        <h2>About the Three Amigos</h2>
        <Paragraph>Quis amet exercitation deserunt magna aute dolore Lorem deserunt consequat commodo excepteur. Qui nulla sit veniam veniam anim sint quis consectetur anim occaecat laboris id. Excepteur esse aliqua ullamco ex laboris ea. Ut sit adipisicing est exercitation minim cupidatat minim in. Eu tempor adipisicing do aliquip mollit nulla eiusmod amet fugiat ipsum qui deserunt incididunt. Nulla non aliquip et enim quis. Sunt ad dolore nisi fugiat enim ipsum tempor do qui proident mollit laboris excepteur aute.Aute fugiat Lorem ut quis irure tempor et dolore reprehenderit elit est. Ipsum cupidatat proident minim laboris minim dolor do velit ad elit qui laboris.</Paragraph>

        <Paragraph>Nostrud nisi consectetur cupidatat aliquip pariatur pariatur duis aliquip exercitation officia qui adipisicing. Anim culpa est ipsum tempor id eiusmod voluptate irure exercitation minim voluptate non consectetur. Ad consectetur ut ad veniam anim cupidatat labore culpa. Est ut laborum aliqua laboris nulla amet reprehenderit. Minim cupidatat esse veniam voluptate anim magna ut eiusmod eu magna enim adipisicing ex sunt.</Paragraph>
        <Picture src={picture}/>
    </div>
  )
}

export default AboutUs