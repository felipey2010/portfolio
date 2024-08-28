import {
  Body,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ContactEmailTemplateProps {
  name: string
  message: string
  email: string
}

interface BugReportTemplateProps {
  message: string
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, message, email }) => (
  <Html>
    <Preview>New Contact Form Submission From {name}</Preview>
    <Body className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <Heading className="text-2xl font-bold text-gray-800">
        New Contact Form Submission
      </Heading>
      <Text className="text-gray-700 mt-4">
        <strong>Name:</strong> {name}
      </Text>
      <Text className="text-gray-700 mt-2">
        <strong>Email:</strong> {email}
      </Text>
      <div className="bg-white p-4 mt-4 border rounded">
        <Text className="text-gray-700 whitespace-pre-line">
          <strong>Message:</strong> {message}
        </Text>
      </div>
      <Section className="text-gray-500 mt-6">
        <Text>
          This message was sent from the Contact Me form on your portfolio site.
        </Text>
      </Section>
    </Body>
  </Html>
)

export const BugReportTemplate: React.FC<Readonly<BugReportTemplateProps>> = ({
  message,
}) => (
  <Html>
    <Preview>New Bug Report</Preview>
    <Body className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <Heading className="text-2xl font-bold text-gray-800">
        New Bug Report
      </Heading>

      <div className="bg-white p-4 mt-4 border rounded">
        <Text className="text-gray-700 whitespace-pre-line">
          A bug was found on the portfolio site and the details are below:
        </Text>
        <Text className="text-gray-700 whitespace-pre-line">
          <strong>Bug:</strong> {message}
        </Text>
      </div>
    </Body>
  </Html>
)
