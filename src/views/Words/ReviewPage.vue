<script lang="ts" setup>

import {chevronBackOutline} from "ionicons/icons";
import {IonContent, IonIcon, IonPage, IonRippleEffect, IonModal, IonButton} from "@ionic/vue";
import PlayIcon from "@/ui/icons/PlayIcon.vue";
import WorldWideIcon from "@/ui/icons/WorldWideIcon.vue";

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

					<div class="header_title"></div>

					<div class="header_icons">
						<div class="header_icon ion-activatable">
							<img src="@/assets/img/worldwide.svg" alt="">
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
						<div class="header_icon ion-activatable">
							<img src="@/assets/img/volume.svg" alt="">
							<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
						</div>
					</div>
				</div>
			</div>

			<div class="content __min-top">
				<div class="content_data">
					<div class="card">
						<div class="card_top">
							<div class="card_top-image">
								<img src="@/assets/demo/head.webp" alt="">

								<div>
									<div class="card_word">
										<span>remove a from b</span>
									</div>
									<div class="card_trans">/coffin/</div>

									<div class="card_translation">тот, та, то</div>

									<div class="icons">
										<div class="icons_icon ion-activatable">
											<PlayIcon />

											<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
										</div>
										<div class="icons_icon __favorite"></div>
										<div class="icons_icon _add"></div>
									</div>
								</div>
							</div>
							<div class="card_top-content">
								<div class="card_description">
									<div class="card_description-text">
										<p>Used to refer to a specific person, thing, or idea that is farther away or previously
											mentioned</p>
										<span>Используется для указания на конкретное лицо, вещь или идею, которые находятся дальше или были упомянуты ранее</span>
									</div>
									<div class="icons __min">
										<div class="icons_icon ion-activatable">
											<PlayIcon />

											<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
										</div>
										<div class="icons_icon ion-activatable">
											<WorldWideIcon />

											<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
										</div>
									</div>
								</div>

								<div class="card_examples">
									<h3>Примеры</h3>

									<div class="card_examples-items">
										<div class="card_examples-item">
											<div class="card_description">
												<div class="card_description-text">
													<p>She signed the document in front of the notary</p>
													<span>Она подписала документ перед нотариусом</span>
												</div>
												<div class="icons __min">
													<div class="icons_icon ion-activatable">
														<PlayIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
													<div class="icons_icon ion-activatable">
														<WorldWideIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
												</div>
											</div>
										</div>
										<div class="card_examples-item">
											<div class="card_description">
												<div class="card_description-text">
													<p>She signed the document in front of the notary</p>
													<span>Она подписала документ перед нотариусом</span>
												</div>
												<div class="icons __min">
													<div class="icons_icon ion-activatable">
														<PlayIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
													<div class="icons_icon ion-activatable">
														<WorldWideIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
												</div>
											</div>
										</div>
										<div class="card_examples-item">
											<div class="card_description">
												<div class="card_description-text">
													<p>She signed the document in front of the notary</p>
													<span>Она подписала документ перед нотариусом</span>
												</div>
												<div class="icons __min">
													<div class="icons_icon ion-activatable">
														<PlayIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
													<div class="icons_icon ion-activatable">
														<WorldWideIcon />

														<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="card_variants">
									<h3>Возможный перевод</h3>

									<div class="card_variants-item">
										<span>adjective</span>
										<p>грязный, мерзкий</p>
									</div>
									<div class="card_variants-item">
										<span>noun</span>
										<p>фол, нарушение</p>
									</div>
									<div class="card_variants-item">
										<span>verb</span>
										<p>загрязнять, осквернять</p>
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
						Уже знаю
						<ion-ripple-effect class="ripple-effect"></ion-ripple-effect>
					</button>
					<button class="bottom-buttons_button __next ion-activatable">
						Учить
						<ion-ripple-effect></ion-ripple-effect>
					</button>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<style scoped>

</style>