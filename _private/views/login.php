<?php $this->layout('layouts::website');?>

<?php $this->start('sidebar')?>
<!-- Door sections toe te voegen aan je layout kun je deze per pagina aanpassen -->
<div class="top-10">
	<h3>Meer weten over...</h3>
	<ol>
        <li><a href="https://www.transformers.community/" target="_blank">Transformers Community</a></li>
        <li><a href="https://www.nji.nl/depressie" target="_blank">Depressie</a></li>
        <li><a href="http://www.kenniscentrum-kjp.nl/ouders-jongeren/angst/" target="_blank">Angststoornissen</a></li>
        <li><a href="http://www.kenniscentrum-kjp.nl/ouders-jongeren/gedragsstoornissen-odd-cd/" target="_blank">Gedragsstoornissen</a></li>
        <li><a href="http://www.trimbos.nl/" target="_blank">Verslaving</a></li>
	</ol>
</div>
<?php $this->stop()?>

<html>
    <body>
        <form action ="<?php echo url('login.handle') ?>" method="POST">
            Gebruikersnaam<br>
            <input type = "text" name = "user"><br>
            Wachtwoord<br>
            <input type ="password" name = "pass"><br>
            <input type ="submit" value = "Inloggen!">
        </form>
    </body>
</html>




