import React from 'react'

import {
   Section,
   SectionText,
   SectionTitle
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Hello there <br />
            I'm Aditya, Welcome To My Personal Portfolio
         </SectionTitle>
         <SectionText>I am frontend web developer</SectionText>
         <Button
            onClick={() =>
               (window.locaton = 'https://kite.zerodha.com/?next=%2Fholdings')
            }
         >
            Learn More
         </Button>
      </LeftSection>
   </Section>
)

export default Hero
