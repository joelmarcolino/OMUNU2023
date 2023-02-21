import React from 'react'
import { Card, CardBody } from './Card.component.style'

export default function CardComponent({children}: any) {
  return (
    <div>
        <Card>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    </div>
  )
}
