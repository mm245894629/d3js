function bersarlinkre(bnode){
    node1=bnode.node1
    node2=bnode.node2

    let startsx=node1.x
    startsy=node1.y+node1.value
    end1x=node1.x
    end1y=node2.y
    r=startsy-end1y
    control1x=node1.x+r
    control1y=node1.y
    control2x=node1.x+r
    control2y=end1y
 
    l1x=node2.x
    l1y=node2.y
    l2x=node2.x
    l2y=node2.y+node1.value
    l3x=node1.x
    l3y=l2y

    r=node1.y-l3y
    c2x=l3x+r
    c2y=l3y

    c3x=c2x
    c3y=node1.y

    end2x=node1.x
    end2y=node1.y
    


    strM=`M${startsx},${startsy} C${control1x},${control1y} ${control2x},${control2y} ${end1x},${end1y}L${l1x},${l1y}L${l2x},${l2y}L${l3x},${l3y}C${c2x},${c2y} ${c3x},${c3y} ${end2x},${end2y}`
    console.log(strM)
    d3.select("svg")
      .append("path")
      .attr("d", strM)
      .attr("stroke", "black")
      .attr("fill", "black")

      .style("opacity",0.3)
      .style("stroke-width", `2px`);
}


function bersarlink(bnode){
    node1=bnode.node1
    node2=bnode.node2
    startsx=node1.x
    startsy=node1.y
    end1x=node1.x
    end1y=node2.y+node1.value
   
    r=end1y-startsy

    control1x=node1.x-r
    control1y=node1.y
    control2x=node1.x-r
    control2y=end1y
 
    l1x=node2.x
    l1y=node2.y


   

    end2x=node1.x
    end2y=node1.y+node1.value
    
    r1=l1y-end2y
    
    c2x=l1x-r1
    c2y=l1y

    c3x=end2x-r1
    c3y=end2y

    strM=`M${startsx},${startsy} C${control1x},${control1y} ${control2x},${control2y} ${end1x},${end1y}L${l1x},${l1y}C${c2x},${c2y} ${c3x},${c3y} ${end2x},${end2y}`
    console.log(strM)
    d3.select("svg")
      .append("path")
      .attr("d", strM)
      .attr("stroke", "black")
      .attr("fill", "black")
        .attr('id','myPath')
      .style("opacity",0.3)
      .style("stroke-width", 1);
}


function bnode(link){
    this.node1=link.source
    this.node1.x=link.source.x*150
    this.node1.y=kv[link.source.y]
    this.node1.value=link.value*nodeheight/nodebeginvalue

    this.node2=link.target
    this.node2.x=link.target.x*150
    this.node2.y=kv[link.target.y]//需改
}