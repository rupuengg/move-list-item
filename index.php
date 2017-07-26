<!DOCTYPE html>
<html>
	<head>
		<title>Move Item To List</title>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type"/>
		<meta content="utf-8" http-equiv="encoding"/>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script src="angular.min.js"></script>
		<script type="text/javascript" src="main-controller.js"></script>
		<script type="text/javascript" src="move-list-item.js"></script>
	</head>
	<body ng-app="rup" ng-controller="mainController as mainCtrl">
		<h1>Move Item To List</h1>
		{{rightlist}}
		<br/>
		<br/>
		<move-list-item width="500" mlist="mainlist" rlist="rightlist" k-format="id" v-format="title" is-reverse="true"></move-list-item>
	</body>
</html>