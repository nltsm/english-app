<script lang="ts" setup>

import {chevronBackOutline} from "ionicons/icons";
import {IonContent, IonIcon, IonPage, IonRippleEffect} from "@ionic/vue";
import PlayIcon from "@/ui/icons/PlayIcon.vue";
</script>

<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="header">
				<div class="header_row">
					<div class="header_back ion-activatable" @click="$router.back()">
						<ion-icon :icon="chevronBackOutline" size="large"></ion-icon>
						<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
					</div>

					<div class="header_title">Обучение</div>

					<div class="header_icons">
						<div class="header_icon ion-activatable">
							<img src="@/assets/img/volume.svg" alt="">
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
					</div>
				</div>
			</div>

			<div class="content __fixed-height __min-top">
				<div class="content_data">
					<div class="content_center">
						<div class="exercise">
							<div class="exercise_image">
								<img src="@/assets/demo/head.webp" alt="">
								<span>She signed the document in front of the notary</span>
							</div>
							<div class="exercise_content">
								<div class="exercise_word">hello</div>
								<div class="exercise_trans">/coffin/</div>
								<div class="exercise_translate __show">Показать перевод</div>
								<!--<div class="exercise_translate">Привет</div>-->
								<div class="exercise_icons">
									<div class="icons __center">
										<div class="icons_icon ion-activatable">
											<PlayIcon/>

											<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
										</div>
										<div class="icons_icon __favorite"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="bottom-buttons">
				<div class="bottom-buttons_row">
					<button class="bottom-buttons_button __prev ion-activatable">
						Повторить
						<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
					</button>
					<button class="bottom-buttons_button __next ion-activatable">
						Легко
						<ion-ripple-effect></ion-ripple-effect>
					</button>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<style scoped>

</style>