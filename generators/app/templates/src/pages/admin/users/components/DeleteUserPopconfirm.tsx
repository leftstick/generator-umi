import React from 'react'
import { useIntl, useModel } from 'umi'
import { Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { pick } from '@/helpers'

import styles from '../index.less'

export default function DeleteUserPopconfirm({ onConfirm, value }: { onConfirm: () => void; value: number }) {
  const { deleteUser } = useModel('useUserManagementModel', m => pick(m, 'deleteUser'))
  const { formatMessage } = useIntl()
  return (
    <Popconfirm
      title={formatMessage({ id: 'CONFIRM_DELETE_USER' })}
      onConfirm={() => {
        deleteUser(value).then(onConfirm)
      }}
      okText={formatMessage({ id: 'CONFIRM_BTN' })}
      cancelText={formatMessage({ id: 'CANCEL_BTN' })}
    >
      <DeleteOutlined className={styles.iconBtn} />
    </Popconfirm>
  )
}
