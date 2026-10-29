express = require('express');

const app= express();

const PORT = 3000;
app.get('/',(req,res)=>{
    res.send('Health api check is OK');
});
app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});