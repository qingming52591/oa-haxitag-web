import {
    Col,
    Row,
    Button,
    Form,
    Input,
    DatePicker,
    Modal,
    Table,
    Space,
    Avatar,
    Select,
    Checkbox,
    InputNumber
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import * as util from '../../util'
import * as d3 from 'd3';


const WIDTH = 900;
const HEIGHT = 580;
const R = 30;

export class KGManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.print();
    }

    print = () => {
        //初始化数据
        const nodeData = [
            {id: 1, name: '感冒'},
            {id: 2, name: '疟疾'},
            {id: 3, name: '感冒'},
            {id: 4, name: '咽痛寒热'},
            {id: 5, name: '阴虚火旺，风邪外乘'},
            {id: 6, name: '黑膏汤'},
            {id: 7, name: '育阴之中，佐以解表'},
        ];
        let nodes = [];
        for (let i = 0; i < nodeData.length; i++) {
            nodes.push({
                id: (nodeData[i] && nodeData[i].id) || '', // 节点id
                name: (nodeData[i] && nodeData[i].name) || '', // 节点名称
            });
        }
        const relData = [
            {id: 1, source: 1, target: 2, tag: '影响2'},
            {id: 2, source: 1, target: 3, tag: '影响3'},
            {id: 3, source: 1, target: 4, tag: '影响4'},
            {id: 4, source: 1, target: 5, tag: '影响5'},
            {id: 5, source: 1, target: 6, tag: '影响6'},
            {id: 6, source: 1, target: 7, tag: '影响7'},
        ];
        let edges = [];
        for (let i = 0; i < relData.length; i++) {
            edges.push({
                id: (relData[i] && (relData[i].id)) || '', // 连线id
                source: relData[i].source, // 开始节点
                target: relData[i].target, // 结束节点
                tag: (relData[i].tag) || '', // 连线名称
            });
        }
        this.setState({
            nodes: nodes,
            edges: edges
        })
        this.forceChart(nodes, edges)
    }

    forceChart = (nodes, edges) => {
        this.refs['theChart'].innerHTML = '';

        //定义力模型
        const simulation = d3.forceSimulation(nodes) // 指定被引用的nodes数组
            .force('link', d3.forceLink(edges).id(d => d.id).distance(150))
            .force('collision', d3.forceCollide(1).strength(0.1))
            .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2))
            .force('charge', d3.forceManyBody().strength(-1000).distanceMax(800));

        //缩放
        function onZoomStart(d) {
            // console.log('start zoom');
        }

        function zooming(d) {
            // 缩放和拖拽整个g
            // console.log('zoom ing', d3.event.transform, d3.zoomTransform(this));
            // g.attr('transform', d3.event.transform); // 获取g的缩放系数和平移的坐标值。
        }

        function onZoomEnd() {
            // console.log('zoom end');
        }

        const zoom = d3.zoom()
            // .translateExtent([[0, 0], [WIDTH, HEIGHT]]) // 设置或获取平移区间, 默认为[[-∞, -∞], [+∞, +∞]]
            .scaleExtent([1 / 10, 10]) // 设置最大缩放比例
            .on('start', onZoomStart)
            .on('zoom', zooming)
            .on('end', onZoomEnd);

        //绘制svg
        const svg = d3.select('#theChart').append('svg') // 在id为‘theChart’的标签内创建svg
            .style('width', WIDTH)
            .style('height', HEIGHT * 0.9)
            .on('click', () => {
                // console.log('click', d3.event.target.tagName);
            })
            .call(zoom); // 缩放
        const g = svg.append('g'); // 则svg中创建g

        //绘制连线
        const edgesLine = svg.select('g')
            .selectAll('line')
            .data(edges) // 绑定数据
            .enter() // 为数据添加对应数量的占位符
            .append('path') // 在占位符上面生成折线（用path画）
            .attr('d', (d) => {
                return d && 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
            }) //遍历所有数据。d表示当前遍历到的数据，返回绘制的贝塞尔曲线
            .attr('id', (d, i) => {
                return 'edgepath' + i;
            }) // 设置id，用于连线文字
            .attr('marker-end', 'url(#arrow)') // 根据箭头标记的id号标记箭头
            .style('stroke', '#000') // 颜色
            .style('stroke-width', 1); // 粗细

        //连线名称
        const edgesText = svg.select('g').selectAll('.edgelabel')
            .data(edges)
            .enter()
            .append('text') // 为每一条连线创建文字区域
            .attr('class', 'edgelabel')
            .attr('dx', 80)
            .attr('dy', 0);
        edgesText.append('textPath')
            .attr('xlink:href', (d, i) => {
                return '#edgepath' + i;
            }) // 文字布置在对应id的连线上
            .style('pointer-events', 'none') // 禁止鼠标事件
            .text((d) => {
                return d && d.tag;
            }); // 设置文字内容

        //绘制连线上的箭头
        const defs = g.append('defs'); // defs定义可重复使用的元素
        const arrowheads = defs.append('marker') // 创建箭头
            .attr('id', 'arrow')
            // .attr('markerUnits', 'strokeWidth') // 设置为strokeWidth箭头会随着线的粗细进行缩放
            .attr('markerUnits', 'userSpaceOnUse') // 设置为userSpaceOnUse箭头不受连接元素的影响
            .attr('class', 'arrowhead')
            .attr('markerWidth', 20) // viewport
            .attr('markerHeight', 20) // viewport
            .attr('viewBox', '0 0 20 20') // viewBox
            .attr('refX', 9.3 + R) // 偏离圆心距离
            .attr('refY', 5) // 偏离圆心距离
            .attr('orient', 'auto'); // 绘制方向，可设定为：auto（自动确认方向）和 角度值
        arrowheads.append('path')
            .attr('d', 'M0,0 L0,10 L10,5 z') // d: 路径描述，贝塞尔曲线
            .attr('fill', '#000'); // 填充颜色

        //拖拽
        function onDragStart(d) {
            // console.log('start');
            // console.log(d3.event.active);
            // if (!d3.event.active) {
            //     simulation.alphaTarget(1) // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
            //         .restart();  // 拖拽节点后，重新启动模拟
            // }
            // d.fx = d.x;    // d.x是当前位置，d.fx是静止时位置
            // d.fy = d.y;
        }

        function dragging(d) {
            // d.fx = d3.event.x;
            // d.fy = d3.event.y;
        }

        function onDragEnd(d) {
            // if (!d3.event.active) simulation.alphaTarget(0);
            // d.fx = null;       // 解除dragged中固定的坐标
            // d.fy = null;
        }

        const drag = d3.drag()
            .on('start', onDragStart)
            .on('drag', dragging) // 拖拽过程
            .on('end', onDragEnd);

        //绘制节点
        const nodesCircle = svg.select('g')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle') // 创建圆
            .attr('r', 30) // 半径
            .style('fill', '#9FF') // 填充颜色
            .style('stroke', '#0CF') // 边框颜色
            .style('stroke-width', 2) // 边框粗细
            .on('click', (node) => { // 点击事件
                console.log('click');
            })
            .call(drag); // 拖拽单个节点带动整个图

        //节点名称
        const nodesTexts = svg.select('g')
            .selectAll('.jdtext')
            .data(nodes)
            .enter()
            .append('text')
            .attr('class', '.jdtext')//bug修复
            .attr('dy', '.3em') // 偏移量
            .attr('text-anchor', 'middle') // 节点名称放在圆圈中间位置
            .style('fill', 'black') // 颜色
            .style('pointer-events', 'none') // 禁止鼠标事件
            .text((d) => { // 文字内容
                return d && d.name; // 遍历nodes每一项，获取对应的name
            });

        //鼠标移到节点上有气泡提示
        nodesCircle.append('title')
            .text((node) => { // .text设置气泡提示内容
                return node.name; // 气泡提示为node的名称
            });

        //监听图元素的位置变化
        simulation.on('tick', () => {
            // 更新节点坐标
            nodesCircle.attr('transform', (d) => {
                return d && 'translate(' + d.x + ',' + d.y + ')';
            });
            // 更新节点文字坐标
            nodesTexts.attr('transform', (d) => {
                return 'translate(' + (d.x) + ',' + d.y + ')';
            });
            // 更新连线位置
            edgesLine.attr('d', (d) => {
                const path = 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
                return path;
            });
            // 更新连线文字位置
            edgesText.attr('transform', (d, i) => {
                return 'rotate(0)';
            });
        });
    }

    render() {
        return (
            <div>
                <div className="outerDiv" style={{"background-color": "#fff", "padding-bottom": "400px"}}>
                    <div className="theChart" id="theChart" ref="theChart">

                    </div>
                </div>
            </div>
        )
    }
}

