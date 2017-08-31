(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function helper(g,x,y){if(x===void 0){return function(h,j){return helper(g,h,j);};}else if(y===void 0){return function(k){return helper(g,x,k);};}if(y[g]!==void 0){return y[g](x);}}function curry(l){return function(x,y){if(y===void 0){return function(m){return l(x,m);};}return l(x,y);};}function curryThree(n){return function(x,y,z){if(y===void 0){var helper=function helper(q,r){return n(x,q,r);};return curry(helper);}else if(z===void 0){return function(s){return n(x,y,s);};}return n(x,y,z);};}function mathHelper(t,x,y){switch(t){case'+':return x+y;case'-':return x-y;case'/':return x/y;case'*':return x*y;case'%':return x%y;}}var u=curryThree(mathHelper);function oppositeHelper(v,x,y){if(x===void 0){return function(w,A){return oppositeHelper(v,w,A);};}else if(y===void 0){return function(B){return oppositeHelper(v,x,B);};}if(x[v]!==void 0){return x[v](y);}}function propHelper(C,x){if(x===void 0){return function(D){return propHelper(C,D);};}return x[C];}function simpleHelper(E,x){if(x===void 0){return function(G){return simpleHelper(E,G);};}if(x[E]!==void 0){return x[E]();}}function addIndex(H){return function(I){for(var J=0,newFn=function newFn(){for(var K=arguments.length,L=Array(K),M=0;M<K;M++){L[M]=arguments[M];}return I.apply(null,[].concat(L,[J++]));},N=arguments.length,O=Array(N>1?N-1:0),P=1;P<N;P++){O[P-1]=arguments[P];}return H.apply(null,[newFn].concat(O));};}function adjust(Q,R,S){var U=S.concat();return U.map(function(V,W){if(W===R){return Q(S[R]);}return V;});}var X=curryThree(adjust);function filter(Y,Z){var a1=-1,b1=0,c1=Z.length,d1=[];while(++a1<c1){var e1=Z[a1];if(Y(e1)){d1[b1++]=e1;}}return d1;}var f1=curry(filter);function all(g1,h1){if(arguments.length===1){return function(i1){return all(g1,i1);};}return f1(g1,h1).length===h1.length;}function any(fn,k1){var l1=0;while(l1<k1.length){if(fn(k1[l1])){return!0;}l1++;}return!1;}var m1=curry(any);function allPass(n1,x){if(arguments.length===1){return function(o1){return allPass(n1,o1);};}return!m1(function(p1){return!p1(x);})(n1);}function anyPass(q1,x){if(arguments.length===1){return function(r1){return anyPass(q1,r1);};}return m1(function(s1){return s1(x);})(q1);}function append(t1,u1){var v1=u1.concat();v1.push(t1);return v1;}var w1=curry(append);function both(x,y){return function(x1){return x(x1)&&y(x1);};}var y1=curry(both);function compose(){for(var z1=arguments.length,A1=Array(z1),B1=0;B1<z1;B1++){A1[B1]=arguments[B1];}return function(C1){var D1=A1.slice();while(D1.length>0){C1=D1.pop()(C1);}return C1;};}function type(a){if(a===null){return'Null';}else if(Array.isArray(a)){return'Array';}else if(typeof a==='boolean'){return'Boolean';}else if(typeof a==='number'){return'Number';}else if(typeof a==='string'){return'String';}else if(a===void 0){return'Undefined';}else if(a instanceof RegExp){return'RegExp';}var E1=a.toString();if(E1.startsWith('async')){return'Async';}else if(E1==='[object Promise]'){return'Promise';}else if(E1.includes('function')||E1.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(a===b){return!0;}var F1=type(a);if(F1!==type(b)){return!1;}if(F1==='Array'){var G1=Array.from(a),H1=Array.from(b);return G1.sort().toString()===H1.sort().toString();}if(F1==='Object'){var I1=Object.keys(a);if(I1.length===Object.keys(b).length){if(I1.length===0){return!0;}var J1=!0;I1.map(function(K1){if(J1){var L1=type(a[K1]),M1=type(b[K1]);if(L1===M1){if(L1==='Object'){if(Object.keys(a[K1]).length===Object.keys(b[K1]).length){if(Object.keys(a[K1]).length!==0){if(!equals(a[K1],b[K1])){J1=!1;}}}else{J1=!1;}}else if(!equals(a[K1],b[K1])){J1=!1;}}else{J1=!1;}}});return J1;}}return!1;}var N1=curry(equals);function contains(O1,P1){var Q1=-1,R1=!1;while(++Q1<P1.length&&!R1){if(N1(P1[Q1],O1)){R1=!0;}}return R1;}var S1=curry(contains),toConsumableArray=function(T1){if(Array.isArray(T1)){for(var i=0,U1=Array(T1.length);i<T1.length;i++)U1[i]=T1[i];return U1;}else{return Array.from(T1);}};function curry$1(f){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return function(){for(var V1=arguments.length,p=Array(V1),W1=0;W1<V1;W1++){p[W1]=arguments[W1];}return function(o){return o.length>=f.length?f.apply(void 0,toConsumableArray(o)):curry$1(f,o);}([].concat(toConsumableArray(a),p));};}var dec=function(x){return x-1;};function defaultTo(X1,Y1){if(arguments.length===1){return function(Z1){return defaultTo(X1,Z1);};}return Y1===void 0||!(type(Y1)===type(X1))?X1:Y1;}function drop(a2,a){return a.slice(a2);}var b2=curry(drop);function dropLast(c2,a){return a.slice(0,-c2);}var d2=curry(dropLast);function either(x,y){return function(e2){return x(e2)||y(e2);};}var f2=curry(either),inc=function(x){return x+1;};function find(fn,h2){return h2.find(fn);}var i2=curry(find);function findIndex(fn,k2){var l2=k2.length,m2=-1;while(++m2<l2){if(fn(k2[m2])){return m2;}}return-1;}var n2=curry(findIndex);function flatten(o2,p2){p2=p2===void 0?[]:p2;for(var i=0;i<o2.length;i++){if(Array.isArray(o2[i])){flatten(o2[i],p2);}else{p2.push(o2[i]);}}return p2;}function has(q2,r2){return r2[q2]!==void 0;}var s2=curry(has);function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function ifElse(t2,u2,v2){return function(w2){if(t2(w2)===!0){return u2(w2);}return v2(w2);};}var x2=curryThree(ifElse);function indexOf(y2,z2){var A2=-1,B2=z2.length;while(++A2<B2){if(z2[A2]===y2){return A2;}}return-1;}var C2=curry(indexOf);function baseSlice(D2,E2,F2){var G2=-1,H2=D2.length;F2=F2>H2?H2:F2;if(F2<0){F2+=H2;}H2=E2>F2?0:F2-E2>>>0;E2>>>=0;var I2=Array(H2);while(++G2<H2){I2[G2]=D2[G2+E2];}return I2;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function map(fn,K2){var L2=-1,M2=K2.length,N2=Array(M2);while(++L2<M2){N2[L2]=fn(K2[L2]);}return N2;}var O2=curry(map);function match(P2,Q2){var R2=Q2.match(P2);return R2===null?[]:R2;}var S2=curry(match);function merge(T2,U2){return Object.assign({},T2,U2);}var V2=curry(merge);function omit(W2,X2){if(arguments.length===1){return function(Y2){return omit(W2,Y2);};}if(!(type(X2)==='Object')){return void 0;}if(type(W2)==='String'){W2=W2.split(',').map(function(x){return x.trim();});}var Z2={};for(var a3 in X2){if(!W2.includes(a3)){Z2[a3]=X2[a3];}}return Z2;}function partialCurry(fn){var c3=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(d3){if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise(function(e3,f3){fn(V2(d3,c3)).then(e3).catch(f3);});}return fn(V2(d3,c3));};}function path(g3,h3){if(arguments.length===1){return function(i3){return path(g3,i3);};}if(!(type(h3)==='Object')){return void 0;}var j3=h3,k3=0;if(typeof g3==='string'){g3=g3.split('.');}while(k3<g3.length){if(j3===null||j3===void 0){return void 0;}j3=j3[g3[k3]];k3++;}return j3;}function pick(l3,m3){if(arguments.length===1){return function(n3){return pick(l3,n3);};}if(!(type(m3)==='Object')){return void 0;}if(type(l3)==='String'){l3=l3.split(',').map(function(x){return x.trim();});}var o3={},p3=0;while(p3<l3.length){if(l3[p3]in m3){o3[l3[p3]]=m3[l3[p3]];}p3++;}return o3;}function pluck(q3,r3){var s3=[];O2(function(t3){if(!(t3[q3]===void 0)){s3.push(t3[q3]);}},r3);return s3;}var u3=curry(pluck);function prepend(v3,w3){var x3=w3.concat();x3.unshift(v3);return x3;}var y3=curry(prepend);function prop(z3,A3){return A3[z3];}var B3=curry(prop);function propEq(C3,D3,E3){return E3[C3]===D3;}var F3=curryThree(propEq);function range(G3,H3){for(var I3=[],i=G3;i<H3;i++){I3.push(i);}return I3;}function reduce(fn,K3,L3){return L3.reduce(fn,K3);}var M3=curryThree(reduce);function repeat(a,N3){var O3=Array(N3);return O3.fill(a);}var P3=curry(repeat);function replace(Q3,R3,S3){return S3.replace(Q3,R3);}var T3=curryThree(replace);function sort(fn,V3){var W3=V3.concat();return W3.sort(fn);}var X3=curry(sort);function sortBy(fn,Z3){var a4=Z3.concat();return a4.sort(function(a,b){var b4=fn(a),c4=fn(b);return b4<c4?-1:b4>c4?1:0;});}var d4=curry(sortBy);function split(e4,f4){return f4.split(e4);}var g4=curry(split);function splitEvery(h4,a){h4=h4>1?h4:1;var i4=[],j4=0;while(j4<a.length){i4.push(a.slice(j4,j4+=h4));}return i4;}var k4=curry(splitEvery);function tap(fn,m4){fn(m4);return m4;}var n4=curry(tap);function tail(o4){return b2(1,o4);}function take(p4,a){if(a===void 0){return function(q4){return take(p4,q4);};}else if(typeof a==='string'){return a.slice(0,p4);}return baseSlice(a,0,p4);}var r4=curry(take);function takeLast(s4,a){var t4=a.length;s4=s4>t4?t4:s4;if(typeof a==='string'){return a.slice(t4-s4);}s4=t4-s4;return baseSlice(a,s4,t4);}var u4=curry(takeLast);function test(v4,w4){return w4.search(v4)!==-1;}var x4=curry(test);function uniq(y4){var z4=-1,A4=[];while(++z4<y4.length){var B4=y4[z4];if(!S1(B4,A4)){A4.push(B4);}}return A4;}function update(C4,D4,E4){var F4=E4.concat();return F4.fill(D4,C4,C4+1);}var G4=curryThree(update);function values(H4){var I4=[];for(var J4 in H4){I4.push(H4[J4]);}return I4;}var K4=u('+'),always=function always(x){return function(){return x;};},complement=function complement(fn){return function(M4){return!fn(M4);};},N4=oppositeHelper('concat'),O4=u('/'),P4=helper('endsWith'),F=function F(){return!1;},identity=function identity(x){return x;},Q4=helper('includes'),R4=helper('join'),S4=helper('lastIndexOf'),T4=propHelper('length'),U4=u('%'),V4=u('*'),not=function not(x){return!x;},W4=helper('padEnd'),X4=helper('padStart'),Y4=simpleHelper('reverse'),Z4=helper('startsWith'),a5=u('-'),T=function T(){return!0;},b5=simpleHelper('toLowerCase'),c5=simpleHelper('toString'),d5=simpleHelper('toUpperCase'),e5=simpleHelper('trim');e.add=K4;e.always=always;e.complement=complement;e.concat=N4;e.divide=O4;e.endsWith=P4;e.F=F;e.identity=identity;e.includes=Q4;e.join=R4;e.lastIndexOf=S4;e.length=T4;e.modulo=U4;e.multiply=V4;e.not=not;e.padEnd=W4;e.padStart=X4;e.reverse=Y4;e.startsWith=Z4;e.subtract=a5;e.T=T;e.toLower=b5;e.toString=c5;e.toUpper=d5;e.trim=e5;e.addIndex=addIndex;e.adjust=X;e.all=all;e.allPass=allPass;e.anyPass=anyPass;e.any=m1;e.append=w1;e.both=y1;e.compose=compose;e.contains=S1;e.curry=curry$1;e.dec=dec;e.defaultTo=defaultTo;e.drop=b2;e.dropLast=d2;e.either=f2;e.inc=inc;e.equals=N1;e.filter=f1;e.find=i2;e.findIndex=n2;e.flatten=flatten;e.has=s2;e.head=head;e.ifElse=x2;e.indexOf=C2;e.init=init;e.last=last;e.map=O2;e.match=S2;e.merge=V2;e.omit=omit;e.partialCurry=partialCurry;e.path=path;e.pick=pick;e.pluck=u3;e.prepend=y3;e.prop=B3;e.propEq=F3;e.range=range;e.reduce=M3;e.repeat=P3;e.replace=T3;e.sort=X3;e.sortBy=d4;e.split=g4;e.splitEvery=k4;e.tap=n4;e.tail=tail;e.take=r4;e.takeLast=u4;e.test=x4;e.type=type;e.uniq=uniq;e.update=G4;e.values=values;Object.defineProperty(e,'__esModule',{value:!0});});