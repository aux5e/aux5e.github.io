<?php

$userid = 0;
if(isset($_POST['userid'])){
   $userid = htmlspecialchars($_POST['userid']);
}
$conjuracao = true;

if ($conjuracao == true) {
	include('/home/site/wwwroot/data/magias.php');
	$magiasObj = json_decode($jsonobj);
	$magias = json_decode($jsonobj, true);
}

?>

<div id="popover_html" class="popover">
	<div class="popover-header">
		<h4>
			<?php echo $magiasObj->$userid->nome; ?>
		</h4>
		<h6 class="popover-subtitle">
			<?php
				if ($magiasObj->$userid->circulo != 0) {
					echo $magiasObj->$userid->circulo . 'º círculo, ';
				} else {
					echo 'Truque, ';
				}
				echo $magiasObj->$userid->escola;
			?>
		</h6></div>
	
	<div class="popover-body">
		<div class="popover-infos popover-magias">
			<b>Tempo de Conjuração:</b> <?php echo $magiasObj->$userid->tempo_conjuracao; ?><br>
			<b>Alcance:</b> <?php echo $magiasObj->$userid->alcance; ?><br>
			<b>Componentes:</b> <?php echo $magiasObj->$userid->componentes; ?><?php if(isset($magiasObj->$userid->componentes_extra)) {echo ' ' . $magiasObj->$userid->componentes_extra;} ?><br>
			<b>Duração:</b> <?php echo $magiasObj->$userid->duracao; ?></div>
			<?php echo mb_strimwidth($magiasObj->$userid->descricao, 0, 1000, ' [...]<br><p><span class=\'badge badge-spells\' style=\'padding:8px;font-size:14px;\'>ACESSE A PÁGINA PARA VER MAIS</span></p>'); ?>
		</div>
	</div>
</div>