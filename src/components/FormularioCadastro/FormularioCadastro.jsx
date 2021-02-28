import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ sendData, validaCPF }) {
    const [nome, setNome] = useState("");
    const [sobreNome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidade] = useState(true);
    const [promocoes, setPromocao] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            sendData({ nome, sobreNome, cpf, promocoes, novidades });
        }}>

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome" label="Nome" variant="outlined" color="secondary" margin="normal" fullWidth />

            <TextField
                value={sobreNome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="Sobrenome" label="Sobrenome" variant="outlined" color="secondary" margin="normal" fullWidth />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const ehValido = validaCPF(cpf);
                    setErros({ cpf: ehValido })
                }
                }
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF" label="CPF" variant="outlined" color="secondary" margin="normal" fullWidth />

            <FormControlLabel label="Promoções" control={
                <Switch onChange={(event) => {
                    setPromocao(event.target.checked)
                }
                } checked={promocoes} name="promocoes" color="primary" />
            } />

            <FormControlLabel label="Novidades" control={
                <Switch onChange={(event) => {
                    setNovidade(event.target.checked)
                }
                } checked={novidades} name="promocnovidadesoes" color="primary" />
            } />
            <Button variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;