<script setup lang="ts">
import {IonPage, IonContent, IonRippleEffect, IonProgressBar} from '@ionic/vue';
</script>

<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div class="top-block">
				<div class="top-block_top">
					<div class="top-block_user">
						<div class="top-block_image">
							<img src="@/assets/img/profile.svg" alt="">
						</div>
						<div class="top-block_user-content">
							<div class="top-block_name">Говорящий человек</div>
							<div class="top-block_slogan">Добро пожаловать в English Words!</div>
						</div>
					</div>

					<div class="top-block_notification">
						<img src="@/assets/img/bell.svg" alt="">
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

			<div class="content">
				<div class="content_data">
					<div class="levels">
						<h1 class="h1-like">Словарь</h1>

						<router-link :to="{name: 'exercises.review'}" style="display: block; padding: 10px; border: 1px solid #eee; margin-bottom: 10px;">Запоминание</router-link>
						
						<router-link :to="{name: 'exercises.english-to-russian'}" style="display: block; padding: 10px; border: 1px solid #eee; margin-bottom: 10px;">С английского на русский</router-link>
						
						<router-link :to="{name: 'exercises.build'}" style="display: block; padding: 10px; border: 1px solid #eee; margin-bottom: 10px;">Конструктор</router-link>
						
						<router-link :to="{name: 'exercises.dictant'}" style="display: block; padding: 10px; border: 1px solid #eee; margin-bottom: 10px;">Диктант</router-link>

						<div class="levels_items">
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level">A1</div>
									<div class="levels_content">
										<p>Elementary</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.3"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level __2">A2</div>
									<div class="levels_content">
										<p>Pre-Intermediate</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.3"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level __3">B1</div>
									<div class="levels_content">
										<p>Intermediate</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.3"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level __4">B2</div>
									<div class="levels_content">
										<p>Upper-Intermediate</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.3"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level __5">C1</div>
									<div class="levels_content">
										<p>Advanced</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.3"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
							<div class="levels_item ion-activatable">
								<div class="levels_top">
									<div class="levels_level __6">C2</div>
									<div class="levels_content">
										<p>Proficiency</p>
										<span>0 / 1024</span>
									</div>
								</div>
								<ion-progress-bar class="progress-bar-bg" :value="0.8"></ion-progress-bar>
								<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>