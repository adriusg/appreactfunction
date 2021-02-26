import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){
return(
   <form>
      
       <TextField id="nome" label="Nome" variant="outlined" color="secondary" margin="normal" fullWidth/>
       <TextField id="Sobrenome" label="Sobrenome" variant="outlined" color="secondary" margin="normal" fullWidth/>
       <TextField id="CPF" label="CPF" variant="outlined" color="secondary" margin="normal" fullWidth/>
       
       <FormControlLabel label="Promoções" control={ 
            <Switch defaultChecked name="promocoes" color="primary" />
        } />
      
      <FormControlLabel label="Novidades" control={ 
            <Switch defaultChecked name="promocnovidadesoes" color="primary" />
        } />



       <Button variant="contained" color="primary">Cadastrar</Button>

   </form>  
   
);
}

export default FormularioCadastro;