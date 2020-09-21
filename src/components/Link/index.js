import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const MyLink = ({ href, as, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return (
    <Link href={href} as={as}>
      {React.cloneElement(children, { className })}
    </Link>
  )
}
