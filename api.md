### API doc
| type | method | url | cookies | query | data | result |
|:---------|:---------|:---------|:---------|:---------|:---------|:---------|
| login | POST | /account/login | none | none |{u:`username`,p:`password`}| login success: {code:1,msg:'success',data:null},password error: {code:0,msg:'fail',data:null},no account: {code: -1,msg:'success',data:null},},server error: {code:-2,msg:'error',data:null} | 
| register | POST | /account/register | none | none | {u:`username`,p:`password`}| register success: {code:msg:'success',data:null},username is duplicate: {code:0,msg:'fail',data:null},server error: {code:-1,msg:'error',data:null},server error: {code:-2,msg:'error',data:null} |
| activate mailbox | POST | /account/activateMailbox | token=`token` | none | {bi:`base64 encoding id`,email:`email`,eavc:`eamil activate verification code`} | activate mailbox success: {code:1,msg:'success',data:null},activated mailbox: {code:0,msg:'fail',data:null},log out: {code:-1,msg:'fail',data:null},server error:{code:-2,msg:'error',data:null} |
| send activate mailbox verification code | POST | /account/sendActivateMailboxVerificationCode | token=`token` | none | {bi:`base64 encoding id`,email:`email`} | send success: {code:1,msg:'success',data:null},activated mailbox: {code:0,msg:'fail',data:null},log out: {code:-1,msg:'fail',data:null},server error: {code:-2,msg:'error',data:null} |
### dynamic page
| type | url | cookies | query | 
|:---------|:---------|:---------|:---------|
| activate mailbox | /account/activaite_mailbox | token=`token` | un=`un` |
| profile | /account/profile | none | none |
