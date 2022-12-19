import { useEffect } from 'react'

const mock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done.')
    }, 1000)
  })
}

type Props = {
  count: number
}

export const UseEffectComponent = ({ count }: Props) => {
  console.log('useEffectComponent rendered')

  useEffect(() => {
    const now = Date.now()
    console.log(`useEffectComponent mounted. ${now}`)

    const asyncFunc = async () => {
      const result = await mock()
      console.log(`${result} ${now}`)
    }

    asyncFunc()
    return () => {
      console.log(`useEffectComponent unmounted. ${now}`)
    }
  })
  return <div>{count}</div>
}
