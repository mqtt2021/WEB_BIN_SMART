export const list =[
    {
        id:'1',
        name:'SmartBin1',
        location:{
            district:'Quận 1',
            street:'Tôn Đức Thắng'
        },
        Power: '100%',
        Available : {
            Organic:'Thấp',
            Inorganic_recyclables: 'Cao',
            Non_recyclables_inorganic:'Trung bình'
        },
        Trash_compression:{
            Organic:'11',
            Inorganic_recyclables: '12',
            Non_recyclables_inorganic:'13'
        },
        Worker: {
            name: 'Nguyễn Văn A',
            email:'nguyenvana@gmail.com',
            phone: '0999383337'
        },
        maintenance_date  : '14/2/2022',
        Version: '1.1.2',
        Status: 'Đang sửa chữa',
        Connected:false,
        Installation_date:'11/1/2020',
        fault:{
            khong_dong_cua:true,
            ep_khong_duoc:true
        } 
    },
    {
        id:'2',
        name:'SmartBin2',
        location:{
            district:'Quận 2',
            street:'Võ Nguyên Giáp'
        },
        Power: '100%',
        Available : {
            Organic:'Trung bình',
            Inorganic_recyclables: 'Thấp',
            Non_recyclables_inorganic:'Thấp'
        },
        Trash_compression:{
            Organic:'2',
            Inorganic_recyclables: '1',
            Non_recyclables_inorganic:'3'
        },
        Worker: {
            name: 'Nguyễn Văn B',
            email:'nguyenvanb@gmail.com',
            phone: '0993383337'
        },
        maintenance_date  : '14/3/2022',
        Version: '1.1.3',
        Status: 'Bình thường',
        Connected:true,
        Installation_date:'11/1/2021',
        fault:{
            khong_dong_cua:false,
            ep_khong_duoc:true
        } 
    },
    {
        id:'3',
        name:'SmartBin3',
        location:{
            district:'Quận 10',
            street:'Lý Thường Kiệt'
        },
        Power: '80%',
        Available : {
            Organic:'Cao',
            Inorganic_recyclables: 'Thấp',
            Non_recyclables_inorganic:'Trung bình'
        },
        Trash_compression:{
            Organic:'11',
            Inorganic_recyclables: '11',
            Non_recyclables_inorganic:'14'
        },
        Worker: {
            name: 'Nguyễn Văn C',
            email:'nguyenvanc@gmail.com',
            phone: '0199383337'
        },
        maintenance_date : '14/4/2022',
        Version: '1.1.4',
        Status: 'normal',
        Connected:true,
        Installation_date:'11/1/2019',
        fault:{
            khong_dong_cua:false,
            ep_khong_duoc:false
        } 
    },
    {
        id:'4',
        name:'SmartBin4',
        location:{
            district:'Quận 10',
            street:'Cộng Hòa'
        },
        Power: '20%',
        Available : {
            Organic:'Cao',
            Inorganic_recyclables: 'Thấp',
            Non_recyclables_inorganic:'Trung bình'
        },
        Trash_compression:{
            Organic:'5',
            Inorganic_recyclables: '5',
            Non_recyclables_inorganic:'3'
        },
        Worker: {
            name: 'Nguyễn Văn D',
            email:'nguyenvand@gmail.com',
            phone: '0119383337'
        },
        maintenance_date : '14/4/2022',
        Version: '1.1.4',
        Status: 'Đang sửa chữa',
        Connected:false,
        Installation_date:'11/1/2018',
        fault:{
            khong_dong_cua:false,
            ep_khong_duoc:false
        } 
    },
]