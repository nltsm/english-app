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

					<div class="header_title">Конструктор</div>

					<div class="header_icons">
						<div class="header_icon ion-activatable">
							<img src="@/assets/img/volume.svg" alt="">
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
					</div>
				</div>
			</div>

			<div class="content __fixed-height __no-min-height __pb0 __min-top">
				<div class="content_data">
					<div class="content_center">
						<div class="exercise">
							<div class="exercise_content">
								<div class="exercise_image">
									<img src="@/assets/demo/head.webp" alt="">
								</div>
								<div class="exercise_translate">Привет</div>
								<div class="exercise_word">he</div>
								
								<div class="exercise_letters">
									<div class="exercise_letter">h</div>
									<div class="exercise_letter">e</div>
									<div class="exercise_letter">l</div>
									<div class="exercise_letter">o</div>
									<div class="exercise_letter">l</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<style scoped>

</style>