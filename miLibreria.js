function bounceOff(obe1,obe2){
    if (obe1.x - obe2.x < obe2.width/2 + obe1.width/2
      && obe2.x - obe1.x < obe2.width/2 + obe1.width/2) {
    obe1.velocityX = obe1.velocityX * (-1);
    obe2.velocityX = obe2.velocityX * (-1);
  }
  if (obe1.y - obe2.y < obe2.height/2 + obe1.height/2
    && obe2.y - obe1.y < obe2.height/2 + obe1.height/2){
    obe1.velocityY = obe1.velocityY * (-1);
    obe2.velocityY = obe2.velocityY * (-1);
  }
  }
