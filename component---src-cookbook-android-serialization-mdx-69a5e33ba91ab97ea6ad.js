(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GAHV:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return p})),a.d(n,"default",(function(){return y}));var i=a("Fcif"),l=a("+I+c"),t=(a("mXGw"),a("/FXl")),o=a("TjRS"),r=a("+8zC"),p=(a("NRsk"),a("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cookbook/android_serialization.mdx"}});var s={_frontmatter:p},m=o.a;function y(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(t.b)(m,Object(i.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"data-serialization"},"Data serialization"),Object(t.b)("p",null,"When using custom events and global event properties you may need to serialize data to one of SDK supported formats:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"JSONObject")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"Bundle")),Object(t.b)("li",{parentName:"ul"},"json ",Object(t.b)("inlineCode",{parentName:"li"},"String"))),Object(t.b)("p",null,"For all examples we gonna use this data class as an input to the serialization:"),Object(t.b)(r.b,{snippets:{java:"\npublic class Employee {\n    private String name;\n    private String id;\n    private double salary;\n\n    public Employee(String name, String id, double salary) {\n        this.name = name;\n        this.id = id;\n        this.salary = salary;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public String getId() {\n        return id;\n    }\n\n    public double getSalary() {\n        return salary;\n    }\n}\n",kotlin:"\ndata class Employee(val name: String,\n                    val id: String,\n                    salary: Double)\n"},mdxType:"Code"}),Object(t.b)("h2",{id:"serialize-as-jsonobject"},"Serialize as JSONObject"),Object(t.b)(r.b,{snippets:{java:'\nEmployee employee = new Employee("John Dough", "#123456", 1000);\n\nJSONObject serializedEmployee = new JSONObject();\n\ntry {\n    serializedEmployee.put("name", employee.name);\n    serializedEmployee.put("id", employee.id);\n    serializedEmployee.put("salary", employee.salary);\n} catch (JSONException e) {\n    e.printStackTrace();\n}\n',kotlin:'\nval employee = Employee("John Dough", "#123456", 1000)\n\nval serializedEmployee = JSONObject()\n\ntry {\n    serializedEmployee.put("name", employee.name)\n    serializedEmployee.put("id", employee.id)\n    serializedEmployee.put("salary", employee.salary)\n} catch (e: JSONException) {\n    e.printStackTrace()\n}\n'},mdxType:"Code"}),Object(t.b)("h2",{id:"serialize-as-bundle"},"Serialize as Bundle"),Object(t.b)(r.b,{snippets:{java:'\nEmployee employee = new Employee("John Dough", "#123456", 1000);\n\nBundle serializedEmployee = new Bundle();\nserializedEmployee.putString("name", employee.name);\nserializedEmployee.putString("id", employee.id);\nserializedEmployee.putDouble("salary", employee.salary);\n',kotlin:'\nval employee = Employee("John Dough", "#123456", 1000)\n\nval serializedEmployee = new Bundle().apply{\n    putString("name", employee.name)\n    putString("id", employee.id)\n    putDouble("salary", employee.salary)\n}\n'},mdxType:"Code"}),Object(t.b)("h2",{id:"serialize-as-json-string"},"Serialize as json String"),Object(t.b)("p",null,"If you are using ",Object(t.b)("inlineCode",{parentName:"p"},"Gson")," (or any other similar library) you might prefer this way of serializing data for SDK API methods. "),Object(t.b)(r.b,{snippets:{java:'\nEmployee employee = new Employee("John Dough", "#123456", 1000);\nString serializedEmployee = gson.toJson(employee);\n',kotlin:'\nval employee = Employee("John Dough", "#123456", 1000)\nval serializedEmployee = gson.toJson(employee)\n'},mdxType:"Code"}))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cookbook/android_serialization.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cookbook-android-serialization-mdx-69a5e33ba91ab97ea6ad.js.map