import React from 'react'
import { CorporateContactJsonLd, FAQPageJsonLd } from 'next-seo'

const JsonSchema = () => (
  <>
    <CorporateContactJsonLd
      url="http://www.your-company-site.com"
      logo="http://www.example.com/logo.png"
      contactPoint={[
        {
          telephone: '+1-401-555-1212',
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish', 'French']
        },
        {
          telephone: '+1-877-746-0909',
          contactType: 'customer service',
          contactOption: 'TollFree',
          availableLanguage: 'English'
        },
        {
          telephone: '+1-877-453-1304',
          contactType: 'technical support',
          contactOption: 'TollFree',
          areaServed: ['US', 'CA'],
          availableLanguage: ['English', 'French']
        }
      ]}
    />
    <FAQPageJsonLd
      mainEntity={[
        {
          questionName: 'How long is the delivery time?',
          acceptedAnswerText: '3-5 business days.'
        },
        {
          questionName: 'Where can I find information about product recalls?',
          acceptedAnswerText: 'Read more on under information.'
        }
      ]}
    />
  </>
)

export default JsonSchema
