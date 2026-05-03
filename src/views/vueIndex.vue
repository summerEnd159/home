<template>
	<div class="container">
		<!-- 左侧区域 -->
		<div class="left-sidebar">
			<!-- 头部信息 -->
			<header>
				<h1>Summer</h1>
				<p>前端3D开发者 | 创意探索者</p>
				<div class="social-links">
					<a
						href="https://github.com"
						id="github-link"
						target="_blank"
						class="social-link github"
					>
						<i class="fab fa-github"></i>
						GitHub主页
					</a>
					<a
						href="https://bilibili.com"
						id="bili-link"
						target="_blank"
						class="social-link bilibili"
					>
						<i class="fas fa-play-circle"></i>
						Bilibili频道
					</a>
				</div>
			</header>

			<!-- 时间组件 -->
			<div class="time-widget">
				<h3><i class="far fa-clock"></i> 当前时间</h3>
				<div class="time-display" id="current-time">00:00:00</div>
				<div class="date-display" id="current-date">
					2023年1月1日 星期一
				</div>
			</div>

			<!-- 天气组件（无需API Key） -->
			<div class="weather-widget">
				<h3><i class="fas fa-cloud-sun"></i> 成都天气</h3>
				<div v-if="weatherLoading" class="weather-loading">加载中...</div>
				<div v-else-if="weatherError" class="weather-error">{{ weatherError }}</div>
				<div v-else class="weather-content">
					<div class="weather-temp">{{ weatherData.temp }}°C</div>
					<div class="weather-text">{{ weatherData.text }}</div>
				</div>
			</div>
		</div>

		<!-- 中央主要内容区域 -->
		<div class="main-content">
			<div class="projects-grid">
				<!-- 项目卡片1 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-cubes"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">Three.js</h3>
						<p class="project-description">
							基于WebGL的3D图形库，展示各种三维视觉效果和交互场景，包含图形扩展、材质球、事件交互、场景渲染、粒子系统等示例。
						</p>
						<a href="https://case.summerend.top/" class="project-link" target="_blank">探索3D世界</a>
					</div>
				</div>

				<!-- 项目卡片2 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-object-group"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">编辑器</h3>
						<p class="project-description">
							功能丰富的在线代码编辑器，支持模型上传、场景配置、物体修改等多种功能，用于搭建和修改场景。
						</p>
						<a href="https://editor.summerend.top/" class="project-link" target="_blank">开始编辑</a>
					</div>
				</div>

				<!-- 项目卡片3 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-gamepad"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">游戏库</h3>
						<p class="project-description">
							收集和展示基于Web技术的各种互动游戏和小游戏，包含卡牌堆叠游戏、fps游戏、种田游戏等类型。
						</p>
						<a href="https://game.summerend.top/" class="project-link" target="_blank">玩游戏</a>
					</div>
				</div>

				<!-- 项目卡片4 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-draw-polygon"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">Shader</h3>
						<p class="project-description">
							使用GLSL等着色器语言创建的高级视觉效果和图形演示，包括分形、噪声、光线追踪等复杂图形算法。
						</p>
						<a href="https://shader.summerend.top/" class="project-link" target="_blank">查看特效</a>
					</div>
				</div>

				<!-- 项目卡片5 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-globe-americas"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">Cesium</h3>
						<p class="project-description">
							基于Cesium的地理空间数据可视化和3D地球展示，包含地图图层、地形分析、卫星影像等地理信息应用。
						</p>
						<a href="https://cesium.summerend.top/" class="project-link" target="_blank">探索地球</a>
					</div>
				</div>

				<!-- 项目卡片6 -->
				<div class="project-card">
					<div class="icon-container">
						<div class="icon-bg"></div>
						<div class="fill-layer"></div>
						<div class="project-icon">
							<i class="fas fa-paintbrush"></i>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">Canvas</h3>
						<p class="project-description">
							基于canvas的图形案例，展示热力图，动态图形等canvas动画和效果。
						</p>
						<a href="https://canvas.summerend.top/" class="project-link" target="_blank">进入画布</a>
					</div>
				</div>
			</div>
		</div>

		<!-- 页脚 -->
		<footer>
			<p>© 2026 summer 个人主页 | 用代码创造无限可能</p>
		</footer>
	</div>
</template>

<style>
:root {
	--primary-color: #36b3a0;
	--secondary-color: #6c757d;
	--accent-color: #a8dadc;
	--light-color: #f8f9fa;
	--dark-color: #495057;
	--github-color: #333;
	--bilibili-color: #fb7299;
	--bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #e3f2fd 100%);
	--card-gradient: linear-gradient(to bottom right, #ffffff, #f8f9fa);
	--shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
	--transition: all 0.3s ease;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body {
	width: 100%;
	overflow-x: hidden;
	height: 100%;
}

body {
	font-family: "Poppins", sans-serif;
	line-height: 1.6;
	color: var(--dark-color);
	background-color: #f5f7fa;
	background-image:
		radial-gradient(#36b3a0 1px, transparent 1px),
		radial-gradient(#2c3e50 1px, transparent 1px);
	background-size: 50px 50px;
	background-position:
		0 0,
		25px 25px;
	min-height: 100vh;
}

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 30px 20px 0;
	width: 100%;
	max-width: 100%;
}

.container {
	max-width: 1400px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 0.8fr 2.2fr;
	gap: 30px;
	flex: 1;
	width: 100%;
}

@media (max-width: 1200px) {
	.container {
		grid-template-columns: 1fr 1.8fr;
		gap: 20px;
	}
}

@media (max-width: 992px) {
	.container {
		grid-template-columns: 1fr;
		gap: 20px;
	}
	#app {
		padding: 20px 16px 0;
	}
}

@media (max-width: 768px) {
	#app {
		padding: 16px 12px 0;
	}
	.container {
		gap: 16px;
	}
}

.left-sidebar {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

@media (max-width: 768px) {
	.left-sidebar {
		gap: 20px;
	}
}

header {
	text-align: center;
	padding: 30px 20px;
	background: var(--card-gradient);
	border-radius: 20px;
	box-shadow: var(--shadow);
	margin-bottom: 10px;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
	header {
		padding: 20px 16px;
	}
	header h1 {
		font-size: 2.2rem;
	}
	header p {
		font-size: 1rem;
		margin-bottom: 20px;
	}
}

header h1 {
	font-family: "Quicksand", sans-serif;
	font-size: 3.2rem;
	font-weight: 700;
	background: linear-gradient(to right, #36b3a0, #2a9d8f);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	letter-spacing: 1px;
	margin-bottom: 15px;
}

header p {
	font-size: 1.1rem;
	color: var(--secondary-color);
	max-width: 500px;
	margin: 0 auto 25px;
}

.social-links {
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: 10px;
}

@media (max-width: 768px) {
	.social-links {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	.social-link {
		padding: 8px 16px;
		font-size: 0.9rem;
	}
}

.social-link {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 20px;
	background: white;
	border-radius: 50px;
	text-decoration: none;
	color: var(--dark-color);
	font-weight: 500;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	transition: var(--transition);
	border: 1px solid rgba(0, 0, 0, 0.05);
}

.social-link:hover {
	transform: translateY(-5px);
	box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.social-link.github {
	color: var(--primary-color);
}

.social-link.github:hover {
	color: var(--github-color);
	border-color: var(--github-color);
	background-color: rgba(51, 51, 51, 0.05);
}

.social-link.bilibili {
	color: var(--primary-color);
}

.social-link.bilibili:hover {
	color: var(--bilibili-color);
	border-color: var(--bilibili-color);
	background-color: rgba(251, 114, 153, 0.05);
}

.time-widget {
	background: var(--card-gradient);
	border-radius: 20px;
	padding: 25px;
	box-shadow: var(--shadow);
	text-align: center;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
	.time-widget,
	.weather-widget {
		padding: 20px;
	}
	.time-display {
		font-size: 1.8rem;
	}
	.date-display {
		font-size: 0.9rem;
	}
}

.time-widget h3 {
	font-family: "Quicksand", sans-serif;
	font-size: 1.4rem;
	color: var(--primary-color);
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.time-display {
	font-size: 2.2rem;
	font-weight: 700;
	color: var(--primary-color);
	margin-bottom: 8px;
	font-family: "Quicksand", sans-serif;
}

.date-display {
	font-size: 1.1rem;
	color: var(--secondary-color);
}

.weather-widget {
	background: var(--card-gradient);
	border-radius: 20px;
	padding: 25px;
	box-shadow: var(--shadow);
	text-align: center;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.9);
}

.weather-widget h3 {
	font-family: "Quicksand", sans-serif;
	font-size: 1.4rem;
	color: var(--primary-color);
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.weather-content {
	display: flex;
	align-items: baseline;
	justify-content: center;
	gap: 15px;
	flex-wrap: wrap;
}

.weather-temp {
	font-size: 2.2rem;
	font-weight: 700;
	color: var(--primary-color);
	font-family: "Quicksand", sans-serif;
}

.weather-text {
	font-size: 1.2rem;
	color: var(--secondary-color);
}

.weather-loading,
.weather-error {
	font-size: 1rem;
	color: var(--secondary-color);
	padding: 10px;
}

.weather-error {
	color: #e74c3c;
}

.main-content {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 25px;
	flex-grow: 1;
}

@media (max-width: 768px) {
	.projects-grid {
		gap: 16px;
	}
}

.project-card {
	background: var(--card-gradient);
	border-radius: 18px;
	overflow: hidden;
	box-shadow: var(--shadow);
	transition: var(--transition);
	height: 100%;
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(255, 255, 255, 0.8);
	position: relative;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.9);
}

.icon-container {
	height: 90px;
	position: relative;
	overflow: hidden;
}

.icon-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #36b3a0, #2a9d8f);
	z-index: 1;
}

.fill-layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	background: linear-gradient(135deg, #2a9d8f, #21867a);
	z-index: 2;
	transition: width 0.6s ease-in-out;
}

.project-icon {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.8rem;
	color: white;
	z-index: 3;
}

.project-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.project-card:hover .fill-layer {
	width: 100%;
}

@keyframes iconJump {
	0%,
	100% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(-10px);
	}
	50% {
		transform: translateY(0);
	}
	70% {
		transform: translateY(-5px);
	}
}

.project-card:hover .project-icon i {
	animation: iconJump 0.5s ease 0.6s;
}

.project-content {
	padding: 25px 20px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	position: relative;
}

@media (max-width: 768px) {
	.project-content {
		padding: 20px 16px;
	}
	.project-title {
		font-size: 1.2rem;
	}
	.project-description {
		font-size: 0.9rem;
	}
}

.project-title {
	font-family: "Quicksand", sans-serif;
	font-size: 1.4rem;
	color: var(--dark-color);
	margin-bottom: 12px;
}

.project-description {
	color: var(--secondary-color);
	margin-bottom: 20px;
	flex-grow: 1;
	font-size: 0.95rem;
}

.project-link {
	display: inline-block;
	background: linear-gradient(to right, #36b3a0, #2a9d8f);
	color: white;
	padding: 10px 20px;
	border-radius: 50px;
	text-decoration: none;
	font-weight: 500;
	text-align: center;
	transition: var(--transition);
	border: none;
	font-size: 0.95rem;
}

.project-link:hover {
	background: linear-gradient(to right, #2a9d8f, #21867a);
	transform: translateY(-2px);
	box-shadow: 0 5px 15px rgba(42, 157, 143, 0.3);
}

footer {
	text-align: center;
	margin-top: 30px;
	color: var(--secondary-color);
	grid-column: 1 / -1;
	font-size: 0.9rem;
	padding: 20px;
	background: transparent;
	backdrop-filter: none;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
	footer {
		margin-top: 20px;
		padding: 16px;
		font-size: 0.8rem;
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.project-card,
.time-widget,
.weather-widget {
	animation: fadeIn 0.6s ease-out forwards;
}

.project-card:nth-child(1) {
	animation-delay: 0.1s;
}
.project-card:nth-child(2) {
	animation-delay: 0.2s;
}
.project-card:nth-child(3) {
	animation-delay: 0.3s;
}
.project-card:nth-child(4) {
	animation-delay: 0.4s;
}
.project-card:nth-child(5) {
	animation-delay: 0.5s;
}
.project-card:nth-child(6) {
	animation-delay: 0.6s;
}
</style>
<script setup>
import { ref, onMounted } from "vue"

// 天气数据
const weatherLoading = ref(true)
const weatherError = ref("")
const weatherData = ref({
	temp: "",
	text: ""
})

// 成都的经纬度
const CHENGDU_LAT = 30.67
const CHENGDU_LON = 104.07

// WMO天气代码映射
const weatherCodeMap = {
	0: "晴天",
	1: "多云",
	2: "多云",
	3: "阴天",
	45: "雾",
	48: "雾",
	51: "毛毛雨",
	53: "毛毛雨",
	55: "毛毛雨",
	56: "冻毛毛雨",
	57: "冻毛毛雨",
	61: "小雨",
	63: "中雨",
	65: "大雨",
	66: "冻雨",
	67: "冻雨",
	71: "小雪",
	73: "中雪",
	75: "大雪",
	77: "雪粒",
	80: "阵雨",
	81: "阵雨",
	82: "阵雨",
	85: "阵雪",
	86: "阵雪",
	95: "雷暴",
	96: "雷暴",
	99: "雷暴"
}

onMounted(() => {
	updateTime()
	setInterval(updateTime, 1000)
	fetchWeather()

	// 卡片填充层效果
	document.querySelectorAll(".project-card").forEach((card) => {
		const fillLayer = card.querySelector(".fill-layer")
		card.addEventListener("mouseenter", function () {
			fillLayer.style.width = "0"
			void fillLayer.offsetWidth
			setTimeout(() => {
				fillLayer.style.width = "100%"
			}, 10)
		})
		card.addEventListener("mouseleave", function () {
			fillLayer.style.width = "0"
		})
	})

	// 粒子效果
	const githubLink = document.getElementById("github-link")
	createParticleEffect(githubLink, { count: 15, colors: ["#32ac9b", "#969696"], speed: 2 })
	const biliLink = document.getElementById("bili-link")
	createParticleEffect(biliLink, { count: 15, colors: ["#32ac9b", "#fb7299"], speed: 2 })
	const projectLinks = document.getElementsByClassName("project-link")
	for (let link of projectLinks) {
		createParticleEffect(link, { count: 15, colors: ["#32ac9b", "#495057"], speed: 2 })
	}
})

function updateTime() {
	const now = new Date()
	document.getElementById("current-time").textContent = now.toLocaleTimeString("zh-CN")
	const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" }
	document.getElementById("current-date").textContent = now.toLocaleDateString("zh-CN", options)
}

async function fetchWeather() {
	weatherLoading.value = true
	weatherError.value = ""
	try {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${CHENGDU_LAT}&longitude=${CHENGDU_LON}&current_weather=true`
		const response = await fetch(url)
		if (!response.ok) throw new Error(`HTTP ${response.status}`)
		const data = await response.json()
		if (!data.current_weather) throw new Error("天气数据格式错误")
		const current = data.current_weather
		weatherData.value = {
			temp: current.temperature,
			text: weatherCodeMap[current.weathercode] || "未知天气"
		}
		weatherLoading.value = false
	} catch (err) {
		console.error("获取天气失败:", err)
		weatherError.value = "天气获取失败"
		weatherLoading.value = false
	}
}

function createParticleEffect(element, options = {}) {
	const config = {
		count: options.count || 12,
		colors: options.colors || ["#3498db", "#2ecc71", "#e74c3c", "#9b59b6", "#f1c40f", "#1abc9c"],
		size: options.size || [3, 6],
		speed: options.speed || 1.5,
		duration: options.duration || 800,
		enableShadow: options.enableShadow !== false
	}
	const particleContainer = document.createElement("div")
	particleContainer.style.cssText = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
	`
	document.body.appendChild(particleContainer)

	function cleanupOldParticles() {
		const particles = particleContainer.querySelectorAll(".particle")
		if (particles.length > 100) {
			for (let i = 0; i < particles.length - 50; i++) {
				if (particles[i].parentNode) particles[i].parentNode.removeChild(particles[i])
			}
		}
	}

	function createParticle(x, y) {
		const particle = document.createElement("div")
		particle.className = "particle"
		const size = Math.random() * (config.size[1] - config.size[0]) + config.size[0]
		const color = config.colors[Math.floor(Math.random() * config.colors.length)]
		particle.style.cssText = `
			position: absolute;
			width: ${size}px;
			height: ${size}px;
			background-color: ${color};
			border-radius: 50%;
			pointer-events: none;
			left: ${x}px;
			top: ${y}px;
			opacity: 0.9;
			transform: translate(-50%, -50%);
			${config.enableShadow ? `box-shadow: 0 0 8px ${color}, 0 0 16px ${color};` : ""}
			transition: opacity 0.3s ease;
		`
		particleContainer.appendChild(particle)
		return particle
	}

	function animateParticle(particle) {
		const angle = Math.random() * Math.PI * 2
		const speed = config.speed + Math.random()
		let x = parseFloat(particle.style.left)
		let y = parseFloat(particle.style.top)
		const vx = Math.cos(angle) * speed
		const vy = Math.sin(angle) * speed
		const startTime = Date.now()
		function update() {
			const elapsed = Date.now() - startTime
			const progress = elapsed / config.duration
			if (progress >= 1) {
				particle.style.opacity = "0"
				setTimeout(() => { if (particle.parentNode) particle.parentNode.removeChild(particle) }, 300)
				return
			}
			x += vx * (1 - progress * 0.5)
			y += vy * (1 - progress * 0.5)
			const opacity = 0.9 * (1 - progress)
			const scale = 1 - progress * 0.5
			particle.style.left = `${x}px`
			particle.style.top = `${y + progress * 0.5}px`
			particle.style.opacity = opacity
			particle.style.transform = `translate(-50%, -50%) scale(${scale})`
			requestAnimationFrame(update)
		}
		update()
	}

	element.addEventListener("mouseenter", function () {
		const rect = element.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		for (let i = 0; i < config.count; i++) {
			setTimeout(() => { animateParticle(createParticle(centerX, centerY)) }, i * 30)
		}
		cleanupOldParticles()
	})

	element.addEventListener("click", function () {
		const rect = element.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		for (let i = 0; i < config.count * 2; i++) {
			setTimeout(() => { animateParticle(createParticle(centerX, centerY)) }, i * 20)
		}
	})

	return {
		destroy: () => { if (particleContainer.parentNode) particleContainer.parentNode.removeChild(particleContainer) },
		updateConfig: (newOptions) => Object.assign(config, newOptions)
	}
}
</script>