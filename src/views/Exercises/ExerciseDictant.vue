<script lang="ts" setup>
import {chevronBackOutline} from "ionicons/icons";
import {IonContent, IonIcon, IonPage, IonRippleEffect} from "@ionic/vue";
import PlayIcon from "@/ui/icons/PlayIcon.vue";
import BackIcon from "@/ui/icons/BackIcon.vue";
import {Keyboard, KeyboardInfo} from '@capacitor/keyboard';
import {ref} from "vue";

const height = ref<string|null>(null)
const keyBoardHight = ref<number|null>(null)


Keyboard.addListener('keyboardWillShow', (info: KeyboardInfo) => {
	keyBoardHight.value = info.keyboardHeight

	document.body.style.height = (window.innerHeight - keyBoardHight.value) + 'px';
});
Keyboard.addListener('keyboardWillHide', () => {
	if (keyBoardHight.value) {
		document.body.removeAttribute('style')
	}
});

</script>

<template>
	<ion-page :style="{height: height ?? 'auto'}">
		<ion-content :fullscreen="true">
			<div class="header">
				<div class="header_row">
					<div class="header_icons">
						<div class="header_icon __no-bg __ml0 ion-activatable" @click="$router.back()">
							<BackIcon />
							
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
					</div>

					<div class="header_title">Диктант</div>

					<div class="header_icons">
						<div class="header_icon ion-activatable">
							<img src="@/assets/img/volume.svg" alt="">
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
					</div>
				</div>
			</div>

			<div class="content __fixed-height __no-min-height __min-top __pb0">
				<div class="content_data">
					<div class="content_center">
						<div class="exercise">
							<div class="exercise_content">
								<div class="exercise_image">
									<img src="@/assets/demo/head.webp" alt="">
								</div>
								
								<div class="exercise_translate">Привет</div>
								<div class="exercise_word">
									<input type="text" placeholder="Введите слово">
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