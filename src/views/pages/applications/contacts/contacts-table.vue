<template>
    
</template>


<script>
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => (a.Role.toLowerCase() > b.Role.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
 {
   "key": "1",
   "Image": "user-33.jpg",
   "Name": "Carl Evans",
   "Email": "carlevans@example.com",
   "Phone": "12163547758",
   "Role": "Admin",
   "Status": "Active"
 },
 {
   "key": "2",
   "Image": "user-02.jpg",
   "Name": "Minerva Rameriz",
   "Email": "rameriz@example.com",
   "Phone": "11367529510",
   "Role": "Manager",
   "Status": "Active"
 },
 {
   "key": "3",
   "Image": "user-34.jpg",
   "Name": "Robert Lamon",
   "Email": "robert@example.com",
   "Phone": "15362789414",
   "Role": "Salesman",
   "Status": "Active"
 },
 {
   "key": "4",
   "Image": "user-35.jpg",
   "Name": "Patricia Lewis",
   "Email": "patricia@example.com",
   "Phone": "18513094627",
   "Role": "Supervisor",
   "Status": "Active"
 },
 {
   "key": "5",
   "Image": "user-36.jpg",
   "Name": "Mark Joslyn",
   "Email": "markjoslyn@example.com",
   "Phone": "14678219025",
   "Role": "Store Keeper",
   "Status": "Active"
 },
 {
   "key": "6",
   "Image": "user-37.jpg",
   "Name": "Marsha Betts",
   "Email": "marshabetts@example.com",
   "Phone": "10913278319",
   "Role": "Purchase",
   "Status": "Active"
 },
 {
   "key": "7",
   "Image": "user-28.jpg",
   "Name": "Daniel Jude",
   "Email": "daieljude@example.com",
   "Phone": "19125852947",
   "Role": "Delivery Biker",
   "Status": "Active"
 },
 {
   "key": "8",
   "Image": "user-38.jpg",
   "Name": "Emma Bates",
   "Email": "emmabates@example.com",
   "Phone": "13671835209",
   "Role": "Maintenance",
   "Status": "Active"
 },
 {
   "key": "9",
   "Image": "user-39.jpg",
   "Name": "Richard Fralick",
   "Email": "richard@example.com",
   "Phone": "19756194733",
   "Role": "Quality Analyst",
   "Status": "Active"
 },
 {
   "key": "10",
   "Image": "user-03.jpg",
   "Name": "Michelle Robison",
   "Email": "robinson@example.com",
   "Phone": "19167850925",
   "Role": "Accountant",
   "Status": "Active"
 }
]
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

export default {
    data() {
        return {
           searchQuery: "",
            data,
            columns,
            rowSelection,
        }
    },
    methods: {
        getImageUrl(imageName) {
        return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
        },
    },
    computed: {
        filteredPages() {
        const query = this.searchQuery.toLowerCase();
        return this.data.filter((record) => {
            return (
            record.Name.toLowerCase().includes(query) ||
            record.Email.toLowerCase().includes(query) ||
            record.Phone.toLowerCase().includes(query) || 
            record.Role.toLowerCase().includes(query) ||
            record.Status.toLowerCase().includes(query) 
            );
        });
        },
    },
}
</script>