<!-- 柱状图模块 -->

<template>
	<div class="charts-box animated bounceInDown">
		<!-- <div @click="income">test</div> -->
		<div id="charts-bar"></div>
		<div id="charts-pie"></div>
		<div id="charts-line"></div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js';
	export default {
		data() {
			return {
				orderList: 'null',
				dateBase: {
					one: null,
					two: null,
					three: null,
					four: null,
					five: null,
					six: null,
					seven: null,
					eight: null,
					nine: null,
					ten: null,
					eleven: null,
					twelve: null
				},
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.getorder();
		},
		methods: {
			//计算每月份的收入
			income() {
				let price1 = 0;
				let price2 = 0;
				let price3 = 0;
				let price4 = 0;
				let price5 = 0;
				let price6 = 0;
				let price7 = 0;
				let price8 = 0;
				let price9 = 0;
				let price10 = 0;
				let price11 = 0;
				let price12 = 0;
				let ordlist = this.orderList;
				for (let i = 0; i < ordlist.length; i++) {
					let month = ((ordlist[i].mydate).split('-'))[0];
					switch (month) {
						case '1':
							price1 = price1 + parseInt(ordlist[i].ordprice);
							break;
						case '2':
							price2 = price2 + parseInt(ordlist[i].ordprice);
							break;
						case '3':
							price3 = price3 + parseInt(ordlist[i].ordprice);
							break;
						case '4':
							price4 = price4 + parseInt(ordlist[i].ordprice);
							break;
						case '5':
							price5 = price5 + parseInt(ordlist[i].ordprice);
							break;
						case '6':
							price6 = price6 + parseInt(ordlist[i].ordprice);
							break;
						case '7':
							price7 = price7 + parseInt(ordlist[i].ordprice);
							break;
						case '8':
							price8 = price8 + parseInt(ordlist[i].ordprice);
							break;
						case '9':
							price9 = price9 + parseInt(ordlist[i].ordprice);
							break;
						case '10':
							price10 = price10 + parseInt(ordlist[i].ordprice);
							break;
						case '11':
							price11 = price11 + parseInt(ordlist[i].ordprice);
							break;
						case '12':
							price12 = price12 + parseInt(ordlist[i].ordprice);
							break;
					}
				}
				this.dateBase.one=price1;
				this.dateBase.two=price2;
				this.dateBase.three=price3;
				this.dateBase.four=price4;
				this.dateBase.five=price5;
				this.dateBase.six=price6;
				this.dateBase.seven=price7;
				this.dateBase.eight=price8;
				this.dateBase.nine=price9;
				this.dateBase.ten=price10;
				this.dateBase.eleven=price11;
				this.dateBase.twelve=price12;
			},

			//获取订单信息
			async getorder() {
				let res = await ajax('http://localhost:3000/api/selectorder');
				if (res.code === 1) {
					this.orderList = res.date;
					this.income();
					this.drawLine();
					this.drawLine2();
					this.drawLine3();
				} else {
					this.$message({
						message: "订单数据获取失败",
						type: 'error'
					})
				}
			},

			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('charts-bar'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '一年的收入境况'
					},
					tooltip: {
						trigger:'axis'
					},
					xAxis: {
						data: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份"]
					},
					yAxis: {
						// date:[0,60,120,120,180]
					},
					series: [{
						name: '销量',
						type: 'bar',
						data: [this.dateBase.one,
							this.dateBase.two,
							this.dateBase.three,
							this.dateBase.four,
							this.dateBase.five,
							this.dateBase.six,
							this.dateBase.seven,
							this.dateBase.eight,
							this.dateBase.nine,
							this.dateBase.ten,
							this.dateBase.eleven,
							this.dateBase.twelve,
						]
					}]
				});
			},
			drawLine2() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('charts-pie'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '一年的收入境况'
					},
					tooltip:{
						trigger:'item',
						formatter:'{a} <br/>{b} : {c} ({d}%)'
					}
					,
					series: [{
						name: '销量',
						type: 'pie',
						data: [{
								name: "一月份",
								value: this.dateBase.one
							},
							{
								name: "二月份",
								value: this.dateBase.two
							},
							{
								name: "三月份",
								value: this.dateBase.three
							},
							{
								name: "四月份",
								value: this.dateBase.four
							},
							{
								name: "五月份",
								value: this.dateBase.five
							},
							{
								name: "六月份",
								value: this.dateBase.six
							},
							{
								name: "七月份",
								value: this.dateBase.seven
							},
							{
								name: "八月份",
								value: this.dateBase.eight
							},
							{
								name: "九月份",
								value: this.dateBase.nine
							},
							{
								name: "十月份",
								value: this.dateBase.ten
							},
							{
								name: "十一月份",
								value: this.dateBase.eleven
							},
							{
								name: "十二月份",
								value: this.dateBase.twelve
							}
						]
					}]
				});
			},
			drawLine3() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('charts-line'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '一年的收入境况'
					},
					xAxis: {
						data: ["一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份"]
					},
					yAxis: {},
					tooltip:{
						trigger:'axis'
					},
					series: [{
						name: '销量',
						type: 'line',
						data: [this.dateBase.one,
							this.dateBase.two,
							this.dateBase.three,
							this.dateBase.four,
							this.dateBase.five,
							this.dateBase.six,
							this.dateBase.seven,
							this.dateBase.eight,
							this.dateBase.nine,
							this.dateBase.ten,
							this.dateBase.eleven,
							this.dateBase.twelve,
						]
					}]
				});
			}
		}
	}
</script>

<style>
	.charts-box {
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		position: relative;
    background-color: #F0F2F5;
	}

	#charts-bar {
		box-sizing: border-box;
		padding: 20px;
		background-color: white;
		width: 49%;
		height: 49%;
		float: left;
		box-shadow: 0 0 20px #2C3E50;
    box-shadow: 0 0 5px deepskyblue;
    overflow: hidden;
	}

	#charts-pie {
		box-sizing: border-box;
		padding: 20px;
		background-color: white;
		width: 49%;
		height: 49%;
		float: right;
		box-shadow: 0 0 20px #2C3E50;
    box-shadow: 0 0 5px deepskyblue;
    overflow: hidden;
	}

	#charts-line {
		box-sizing: border-box;
		padding: 20px;
		background-color: white;
		width: 97.5%;
		height: 49%;
		float: right;
		box-shadow: 0 0 20px #2C3E50;
		position: absolute;
		bottom: 0;
    box-shadow: 0 0 5px deepskyblue;
    overflow: hidden;
	}
</style>
