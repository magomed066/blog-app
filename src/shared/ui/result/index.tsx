import { Result } from 'antd'
import { ResultProps, ResultType } from 'antd/es/result'
import React, { FC } from 'react'
import { IResultProps } from './model'

const CustomResult: FC<ResultProps> = (props) => {
	return <Result {...props} />
}

export default CustomResult
