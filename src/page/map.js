import React, {Component} from 'react';
import './map.css';
export default class Map extends Component{
    componentDidMount () {
        const { BMap,BMAP_ANCHOR_TOP_LEFT } = window;
        // 百度地图API功能
        //let sContent ='<div style="text-align: center">'+'武汉'+'</div>';
        const opts = {
            width : 200,     // 信息窗口宽度
            height: 40,     // 信息窗口高度
            title : "武汉" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
        };
        const map = new BMap.Map("mapContainer",{
            enableHighResolution: true //是否开启高清
        });

        let point = new BMap.Point(114.300663,30.598218);
        map.centerAndZoom(point, 12);
        const infoWindow = new BMap.InfoWindow("地址：武汉市鲁磨路光谷广场",opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        map.setCurrentCity("湖北"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放*/
        const marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);
        marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
        //添加比例尺
        //const scaleCtrl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT,offset: new BMap.Size(10,40)});
        //map.addControl(scaleCtrl);
        // 左上角，添加比例尺
        const top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
        map.addControl(top_left_control);
        //左上角，添加默认缩放平移控件
        const top_left_navigation = new BMap.NavigationControl();
        map.addControl(top_left_navigation);
        // 添加定位控件
        const geolocationControl = new BMap.GeolocationControl({
            showAddressBar: true,     //是否显示
            enableAutoLocation: false, //首次是否进行自动定位    
            offset: new BMap.Size(0,25) //添加比例尺
        });
        geolocationControl.addEventListener("locationSuccess", function(e){
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError",function(e){
            // 定位失败事件
            alert(e.message);
        });
        map.addControl(geolocationControl);
        /*const label = new BMap.Label("武汉",{offset:new BMap.Size(20,-10)});//添加标注
        marker.setLabel(label);*/
    }

    render() {
        return (
                <div className={"map-style"}>
                    <div id="mapContainer" className={"map"} />
                </div>
        );
    }
}