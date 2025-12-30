// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	PE: [
		{
			name: "Honor 90 Pro",
			image: "/images/device/90pro.png",
			specs: "Black / 16G + 256GB",
			description:
				"两亿像素写真相机，零风险调光护眼屏，5000mAh轻薄长续航。",
			link: "https://www.honor.com/cn/phones/honor-90-pro/",
		},
	],
	PC: [
		{
			name: "OMEN by HP Gaming Laptop 16-wf0xxx",
			image: "/images/device/OMEN16.png",
			specs: "i9-13900HX + RTX 4060 8G / 16G + 2T",
			description: "暗影无需多言。",
			link: "https://www.hpstore.cn/laptops-tablets/personal-laptops/omen-laptops.html",
		},
	],
};
