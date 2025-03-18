<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { IonRippleEffect } from '@ionic/vue';

</script>

<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="top-block">
				<div class="top-block_top">
					<div class="top-block_user">
						<div class="top-block_image">
							<img src="../../assets/img/profile.svg" alt="">
						</div>
						<div class="top-block_user-content">
							<div class="top-block_name">Говорящий человек</div>
							<div class="top-block_slogan">Добро пожаловать в English Words!</div>
						</div>
					</div>
					
					<div class="top-block_notification">
						<img src="../../assets/img/bell.svg" alt="">
						<span>2</span>
					</div>
				</div>
				
				<div class="top-block_repeats">
					<div class="top-block_repeat ion-activatable">
						<div class="top-block_repeat-content">
							<div class="top-block_repeat-icon">
								<img src="../../assets/img/continue.svg" alt="">
							</div>
							<div class="top-block_repeat-text">Продолжить</div>
						</div>
						<div class="top-block_repeat-count">120</div>
						
						<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
					</div>
					<div class="top-block_repeat ion-activatable">
						<div class="top-block_repeat-content">
							<div class="top-block_repeat-icon">
								<img src="../../assets/img/repeat.svg" alt="">
							</div>
							<div class="top-block_repeat-text">Повторение</div>
						</div>
						<div class="top-block_repeat-count">120</div>
						<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
					</div>
				</div>
				
			</div>
			
			<div class="content __fixed-height">
				<div class="content_data">
					<div class="main-block">
						<div class="main-block_row">
							<div class="main-block_col">
								<div class="main-block_item ion-activatable">
									<div class="main-block_title">Vocabulary</div>
									<div class="main-block_text">Словарь</div>
									<div class="main-block_image">
										<img src="../../assets/img/dictionary2.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
							<div class="main-block_col">
								<div class="main-block_item __2 ion-activatable">
									<div class="main-block_title">Expressions</div>
									<div class="main-block_text">Выражения</div>
									<div class="main-block_image">
										<img src="../../assets/img/communication.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
							<div class="main-block_col">
								<div class="main-block_item __3 ion-activatable">
									<div class="main-block_title">Games</div>
									<div class="main-block_text">Игры</div>
									<div class="main-block_image">
										<img src="../../assets/img/dice.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
							<div class="main-block_col">
								<div class="main-block_item __4 ion-activatable">
									<div class="main-block_title">Dialogs</div>
									<div class="main-block_text">Диалоги</div>
									<div class="main-block_image">
										<img src="../../assets/img/language.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
							<div class="main-block_col">
								<div class="main-block_item __5 ion-activatable">
									<div class="main-block_title">Puzzles</div>
									<div class="main-block_text">Пазлы</div>
									<div class="main-block_image">
										<img src="../../assets/img/jigsaw.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
							<div class="main-block_col">
								<div class="main-block_item __6 ion-activatable">
									<div class="main-block_title">Grammar</div>
									<div class="main-block_text">Грамматика</div>
									<div class="main-block_image">
										<img src="../../assets/img/grammar.svg" alt="">
									</div>
									<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>
