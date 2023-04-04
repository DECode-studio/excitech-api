const listBankImages = [
    {
        code: 'bag',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bag.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JhZy5wbmciLCJpYXQiOjE2ODAxMDI3MDAsImV4cCI6MTcxMTYzODcwMH0.b1et8tHxBjnn9JTL2M3Lw6EGN-cHxHYh9HtVZFBSY04&t=2023-03-29T15%3A11%3A40.777Z',
    },
    {
        code: 'bca',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bca.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JjYS5wbmciLCJpYXQiOjE2ODAxMDI3NjMsImV4cCI6MTcxMTYzODc2M30.9de7ag8OvM8sqZ7lTQnOVj4MOTNL1c_hDzz3jp9LihE&t=2023-03-29T15%3A12%3A43.755Z',
    },
    {
        code: 'bni',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bni.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JuaS5wbmciLCJpYXQiOjE2ODAxMDMwMzcsImV4cCI6MTcxMTYzOTAzN30.hglPjf6rP-s65m_T72COK6nZsoDqTJcKTn5_AK9TFO4&t=2023-03-29T15%3A17%3A17.475Z',
    },
    {
        code: 'cimb',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/cimb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2NpbWIucG5nIiwiaWF0IjoxNjgwMTAzMDU0LCJleHAiOjE3MTE2MzkwNTR9.oKtZ7uIw8PDo4lh5yXPf_rJhzGexHuH2nuLz_J4WmLA&t=2023-03-29T15%3A17%3A34.349Z',
    },
    {
        code: 'mandiri',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/mandiri.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L21hbmRpcmkucG5nIiwiaWF0IjoxNjgwMTAzMDg5LCJleHAiOjE3MTE2MzkwODl9.CWmjppuSmVeaILpdHOK9kHL6ARvptpquCWoPrtAmRtI&t=2023-03-29T15%3A18%3A09.855Z',
    },
    {
        code: 'bmi',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bmi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JtaS5wbmciLCJpYXQiOjE2ODAxMDMwOTksImV4cCI6MTcxMTYzOTA5OX0.qcmHpUt2GwVkZU3UMjGeqK0zL_X9MlvZHJyVSMfeJ7c&t=2023-03-29T15%3A18%3A19.842Z',
    },
    {
        code: 'bri',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bri.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JyaS5wbmciLCJpYXQiOjE2ODAxMDI4MzcsImV4cCI6MTcxMTYzODgzN30.O8OfoEbRcHLNw6QsZnFwmnGY7cm6jAnZvQnvN3Su9EA&t=2023-03-29T15%3A13%3A57.443Z',
    },
    {
        code: 'bsi',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/bsi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2JzaS5wbmciLCJpYXQiOjE2ODAxMDMxMjEsImV4cCI6MTcxMTYzOTEyMX0.0RGNCTCf9a26iQ-oSQYOTY2Ph0I03OV_4BXzl3UvEE4&t=2023-03-29T15%3A18%3A41.853Z',
    },
    {
        code: 'permata',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/permata.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L3Blcm1hdGEucG5nIiwiaWF0IjoxNjgwMTAzMTUzLCJleHAiOjE3MTE2MzkxNTN9.Uypi4CIpHq6guDaLpqeKQwfeFmQZ0sU7N47V0XJhQ54&t=2023-03-29T15%3A19%3A13.075Z',
    },
    {
        code: 'danamon',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/danamon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2RhbmFtb24ucG5nIiwiaWF0IjoxNjgwMTAzMTY1LCJleHAiOjE3MTE2MzkxNjV9.phi6tp899NHGmXT-tPm_O0EAzXUryQQ3IkQFW_fJLiM&t=2023-03-29T15%3A19%3A25.979Z',
    },
    {
        code: 'alfamart',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/alfamart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2FsZmFtYXJ0LnBuZyIsImlhdCI6MTY4MDEwMzE4MSwiZXhwIjoxNzExNjM5MTgxfQ.6sW2B-r3IUKDW0qeB6AwAHFjWNklqsAstxyUgu5om7Y&t=2023-03-29T15%3A19%3A41.334Z',
    },
    {
        code: 'indomaret',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/indomaret.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2luZG9tYXJldC5wbmciLCJpYXQiOjE2ODAxMDMxOTYsImV4cCI6MTcxMTYzOTE5Nn0.7TxLEv8sOEPPoZ5KNkWaN1VZri_mkO7gPZC9Cx8JIuI&t=2023-03-29T15%3A19%3A56.593Z',
    },
    {
        code: 'rpx',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/rpx.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L3JweC5wbmciLCJpYXQiOjE2ODAxMDI5MTAsImV4cCI6MTcxMTYzODkxMH0.w9veEgW8R4nwJJEq6DEMw11on2AhsyHXwWtqKe9vZiI&t=2023-03-29T15%3A15%3A10.315Z',
    },
    {
        code: 'akulaku',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/akulaku.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L2FrdWxha3UucG5nIiwiaWF0IjoxNjgwMTAyOTQxLCJleHAiOjE3MTE2Mzg5NDF9.iVeTFFsLqwxiMbGXDsxHwEgoYFEiiuZTEuCc4g5ae1U&t=2023-03-29T15%3A15%3A41.225Z',
    },
    {
        code: 'qris',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/qris.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L3FyaXMucG5nIiwiaWF0IjoxNjgwMTAyOTUyLCJleHAiOjE3MTE2Mzg5NTJ9.j_ZuGDEDbIRX5db08kgaORfqU0qYbxykRD8lb7fSFSE&t=2023-03-29T15%3A15%3A52.994Z',
    },
    {
        code: 'xanpay',
        image: 'https://xasrkjnshoezosgbgkfd.supabase.co/storage/v1/object/sign/images/logo/payment/xanpay.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby9wYXltZW50L3hhbnBheS5wbmciLCJpYXQiOjE2ODAxMDI5NzYsImV4cCI6MTcxMTYzODk3Nn0.ZFP59nJdC0dWKQUxupUrcjfbuDeV1G2tmzYsrB0Vtvs&t=2023-03-29T15%3A16%3A16.443Z',
    },
]

const getBankImage = (code) => {
    return listBankImages.filter((e) => e.code === code)[0].image
}

module.exports = getBankImage