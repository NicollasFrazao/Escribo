<?php
    if (isset($_POST['numero']))
    {
        $numero = (int) $_POST['numero'];

        $resultante = 0;

        for ($cont = 0; $cont < $numero; $cont = $cont + 1)
        {
            if ($cont % 3 == 0 || $cont % 5 == 0)
            {
                $resultante = $resultante + $cont;
            }
        }

        echo json_encode
        (
            [ 
                'vl_resultante' => $resultante
            ]
        );
    }
    else
    {
        echo json_encode
        (
            [ 
                'ds_erro' => 'Número não informado' 
            ]
        );
    }
?>