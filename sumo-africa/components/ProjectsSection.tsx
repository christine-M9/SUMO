export default function ProjectsSection(){

return(

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Our Projects
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl shadow overflow-hidden">

<img src="/project1.jpg"/>

<div className="p-6">
<h3 className="font-bold text-lg">
Road Safety Campaign
</h3>
</div>

</div>

<div className="bg-white rounded-xl shadow overflow-hidden">

<img src="/project2.jpg"/>

<div className="p-6">
<h3 className="font-bold text-lg">
Clean Mobility Initiative
</h3>
</div>

</div>

<div className="bg-white rounded-xl shadow overflow-hidden">

<img src="/project3.jpg"/>

<div className="p-6">
<h3 className="font-bold text-lg">
Urban Transport Research
</h3>
</div>

</div>

</div>

</div>

</section>

)
}