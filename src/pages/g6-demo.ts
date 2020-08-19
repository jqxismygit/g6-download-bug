import G6 from '@antv/g6';
import '../iconfont/iconfont.css';

G6.registerNode('node-icon', {
  draw(cfg: any, group: any) {
    const { label, size = 56 } = cfg;
    const colors = ['#82B6FF', '#D4E9FF', '#1B4FBF', 'rgba(0, 0, 0, 0.65)'];

    //@ts-ignore
    const icon = '\ue622';
    const keyShape = group.addShape('circle', {
      attrs: {
        x: 0,
        y: 0,
        r: size / 2,
        fill: colors[1],
        stroke: colors[0],
        lineWidth: 1,
        // cursor: 'pointer',
      },
      name: 'circle-first',
    });

    group.addShape('text', {
      attrs: {
        x: 0,
        y: 0,
        fontFamily: 'iconfont', // 对应css里面的font-family: "iconfont";
        textAlign: 'center',
        textBaseline: 'middle',
        text: icon,
        fontSize: size / 2,
        fill: colors[2],
      },
      name: 'icon-shape',
    });

    group.addShape('text', {
      attrs: {
        text: label,
        x: 0,
        y: 30,
        fontSize: 14,
        textAlign: 'center',
        textBaseline: 'top',
        fill: colors[3],
      },
      name: 'text-shape',
    });

    return keyShape;
  },
});
